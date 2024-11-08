import { SvgProps } from "@/types/svgs";

const UsersSVG: React.FC<SvgProps> = ({ fillColor = "#213F7D" }) => {
  return (
    <svg
      width="16"
      height="13"
      viewBox="0 0 16 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="users 1">
        <path
          id="Vector"
          opacity="0.4"
          d="M2.4 5.59996C2.71645 5.59996 3.02579 5.50613 3.28891 5.33032C3.55203 5.15451 3.75711 4.90462 3.87821 4.61226C3.99931 4.3199 4.03099 3.99819 3.96926 3.68782C3.90752 3.37745 3.75514 3.09236 3.53137 2.86859C3.30761 2.64483 3.02251 2.49244 2.71214 2.43071C2.40177 2.36897 2.08007 2.40066 1.78771 2.52176C1.49534 2.64286 1.24546 2.84793 1.06965 3.11105C0.893838 3.37417 0.8 3.68351 0.8 3.99996C0.800397 4.42419 0.969096 4.83092 1.26907 5.1309C1.56904 5.43087 1.97578 5.59957 2.4 5.59996ZM14.4 6.39996H12.8C12.3774 6.39951 11.9719 6.56674 11.6725 6.86496C12.1789 7.14056 12.613 7.53199 12.9392 8.00731C13.2655 8.48262 13.4748 9.02836 13.55 9.59996H15.2C15.4122 9.59996 15.6157 9.51568 15.7657 9.36565C15.9157 9.21562 16 9.01214 16 8.79996V7.99996C15.9996 7.57574 15.8309 7.169 15.5309 6.86903C15.231 6.56906 14.8242 6.40036 14.4 6.39996ZM1.6 6.39996C1.17578 6.40036 0.76904 6.56906 0.469068 6.86903C0.169096 7.169 0.000397152 7.57574 0 7.99996V8.79996C0 9.01214 0.0842855 9.21562 0.234315 9.36565C0.384344 9.51568 0.587827 9.59996 0.8 9.59996H2.4475C2.52367 9.02835 2.73362 8.48276 3.06028 8.00754C3.38694 7.53231 3.82111 7.14085 4.3275 6.86496C4.02809 6.56674 3.62259 6.39951 3.2 6.39996H1.6ZM13.6 5.59996C13.9165 5.59996 14.2258 5.50613 14.4889 5.33032C14.752 5.15451 14.9571 4.90462 15.0782 4.61226C15.1993 4.3199 15.231 3.99819 15.1693 3.68782C15.1075 3.37745 14.9551 3.09236 14.7314 2.86859C14.5076 2.64483 14.2225 2.49244 13.9121 2.43071C13.6018 2.36897 13.2801 2.40066 12.9877 2.52176C12.6953 2.64286 12.4455 2.84793 12.2696 3.11105C12.0938 3.37417 12 3.68351 12 3.99996C12.0004 4.42419 12.1691 4.83092 12.4691 5.1309C12.769 5.43087 13.1758 5.59957 13.6 5.59996Z"
          fill={fillColor}
        />
        <path
          id="Vector_2"
          d="M9.9202 7.20002H9.7127C9.17931 7.46073 8.59388 7.59747 8.0002 7.60002C7.3852 7.60002 6.8102 7.45002 6.2877 7.20002H6.0802C5.31643 7.20022 4.58401 7.50371 4.04395 8.04377C3.50389 8.58383 3.20039 9.31626 3.2002 10.08V10.8C3.2002 11.1183 3.32662 11.4235 3.55167 11.6485C3.77671 11.8736 4.08194 12 4.4002 12H11.6002C11.9185 12 12.2237 11.8736 12.4487 11.6485C12.6738 11.4235 12.8002 11.1183 12.8002 10.8V10.08C12.8 9.31626 12.4965 8.58383 11.9564 8.04377C11.4164 7.50371 10.684 7.20022 9.9202 7.20002ZM8.0002 6.40002C8.55398 6.40002 9.09533 6.2358 9.55579 5.92813C10.0163 5.62047 10.3751 5.18317 10.5871 4.67153C10.799 4.1599 10.8544 3.59691 10.7464 3.05377C10.6384 2.51062 10.3717 2.01171 9.98009 1.62012C9.58851 1.22853 9.0896 0.961859 8.54645 0.853821C8.0033 0.745782 7.44032 0.801232 6.92868 1.01316C6.41705 1.22508 5.97975 1.58397 5.67208 2.04442C5.36441 2.50488 5.2002 3.04623 5.2002 3.60002C5.2 3.96778 5.27229 4.33197 5.41293 4.67177C5.55357 5.01157 5.75981 5.32031 6.01986 5.58036C6.2799 5.8404 6.58865 6.04664 6.92845 6.18728C7.26825 6.32793 7.63244 6.40022 8.0002 6.40002Z"
          fill={fillColor}
        />
      </g>
    </svg>
  );
};
export default UsersSVG;
