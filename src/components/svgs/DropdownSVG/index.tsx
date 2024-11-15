import { SvgProps } from "@/types/svgs";

const DropdownSVG: React.FC<SvgProps> = ({ fillColor = "#213F7D" }) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="np_next_2236826_000000 2">
        <path
          id="Vector"
          d="M11.0571 3.9938C11.8982 3.15271 13.1594 4.45646 12.3182 5.25489L7.56747 10.0056C7.23115 10.3841 6.6427 10.3841 6.30638 10.0056L1.63989 5.38131C0.840915 4.54022 2.10255 3.27907 2.9431 4.12022L6.93688 8.114L11.0571 3.9938Z"
          fill={fillColor}
        />
      </g>
    </svg>
  );
};
export default DropdownSVG;
