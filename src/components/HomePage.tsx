/* eslint-disable max-len */
export const HomePage: React.FC = () => {
  const getFlagEmoji = '🇬🇧';

  return (
    <>
      <h1 className="title">Home page</h1>
      <form action="https://youtu.be/TJ5bZuUlftI?si=Jb9odtIDg3vDTGLg">
        <button type="submit" className="button is-dark">
          ¿u wanna have funn
          {getFlagEmoji}
        </button>
      </form>
    </>
  );
};
