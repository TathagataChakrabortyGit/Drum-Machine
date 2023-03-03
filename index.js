const App = () => {
  const [keyName, setkeyName] = React.useState("");

  React.useEffect(() => {
    document.addEventListener("keydown", (event) => {
      const key = event.key.toUpperCase();
      const sound = soundSamples.find(({ text }) => text === key);
      handlePlayReq(key, sound.name);
    });
  }, []);

  const soundSamples = [
    {
      keyCode: 81,
      text: "Q",
      name: "Heater-1",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      keyCode: 87,
      text: "W",
      name: "Heater-2",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      keyCode: 69,
      text: "E",
      name: "Heater-3",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      keyCode: 65,
      text: "A",
      name: "Heater-4_1",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      keyCode: 83,
      text: "S",
      name: "Heater-6",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      keyCode: 68,
      text: "D",
      name: "Dsc_Oh",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      keyCode: 90,
      text: "Z",
      name: "Kick_n_Hat",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      keyCode: 88,
      text: "X",
      name: "RP4_KICK_1",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      keyCode: 67,
      text: "C",
      name: "Cev_H2",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  const handlePlayReq = (key, name) => {
    const sound = document.getElementById(key);
    sound.play();
    setkeyName(name);
  };

  return (
    <div className="container bloc">
      <div className="row main" id="drum-machine">
        <div className="left col-8">
          <div className="drum-pads">
            {soundSamples.map((sound) => (
              <div
                key={sound.keyCode}
                className="drum-pad btn btn-lg btn-outline-secondary font-weight-bold"
                id={sound.keyCode}
                onClick={() => {
                  handlePlayReq(sound.text, sound.name);
                }}
              >
                {sound.text}
                <audio id={sound.text} className="clip" src={sound.src}></audio>
              </div>
            ))}
          </div>
        </div>
        <div className="right col-4">
          <div className="logo d-flex align-items-center justify-content-center font-weight-bold font-italic">
            <div className="p-2 mt-3 mb-4">
              Drum Machine <i className="inner-logo fa fa-free-code-camp"></i>
            </div>
          </div>
          <div className='text-justify mb-4'>Press keys on keyboard to play</div>
          {keyName !== "" && (
            <div
              id="display"
              className="border border-secondary text-center font-weight-bold"
            >
              {keyName}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("target"));
root.render(<App />);
