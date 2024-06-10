import { useEffect, useState } from 'react';
import gsap from 'gsap';

const Preloader = ({ setIsLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          gsap.to('.preloader', {
            opacity: 0,
            duration: 0.1,
            onComplete: () => {
              document.querySelector('.preloader').style.display = 'none';
              setIsLoading(false); // Notify loading complete
            },
          });
          clearInterval(interval);
          return prev;
        }
      });
    };

    const interval = setInterval(updateProgress, 10);

    return () => clearInterval(interval);
  }, [setIsLoading]);

  return (
    <div className="preloader fixed top-0 left-0 w-full h-full bg-black flex flex-col items-center justify-center z-50">
      <h1 className="text-white text-4xl mb-4">{progress}%</h1>
      <div className="w-3/4 h-4 bg-white rounded-full overflow-hidden">
        <div
          className="h-full bg-green-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Preloader;
