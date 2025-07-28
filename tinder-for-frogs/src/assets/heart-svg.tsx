const HeartSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-50 -50 100 90"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="
            M 0 15
            L -15 0
            A 10 10 0 1 1 0 -10
            A 10 10 0 1 1 15 0
            L 15 0
            z
          "
      />
    </svg>
  );
};

export default HeartSVG;
