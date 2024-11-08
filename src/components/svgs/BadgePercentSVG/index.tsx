import { SvgProps } from "@/types/svgs";

const BadgePercentSVG: React.FC<SvgProps> = ({ fillColor = "#213F7D" }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="badge-percent 1" clipPath="url(#clip0_117193_127)">
        <path
          id="Vector"
          opacity="0.4"
          d="M16.0003 8.00004C16.0003 7.44023 15.8295 6.89374 15.5106 6.43361C15.1918 5.97348 14.7401 5.62162 14.2159 5.42504C14.4471 4.91554 14.5174 4.34763 14.4174 3.79713C14.3174 3.24662 14.0519 2.73972 13.6562 2.34408C13.2606 1.94845 12.7537 1.68291 12.2032 1.58291C11.6527 1.48291 11.0848 1.5532 10.5753 1.78442C10.3788 1.2602 10.0269 0.808446 9.56678 0.489537C9.10665 0.170628 8.56014 -0.000244141 8.00029 -0.000244141C7.44044 -0.000244141 6.89393 0.170628 6.43379 0.489537C5.97365 0.808446 5.62181 1.2602 5.42529 1.78442C4.91578 1.5532 4.34787 1.48291 3.79737 1.58291C3.24687 1.68291 2.73996 1.94845 2.34433 2.34408C1.94869 2.73972 1.68315 3.24662 1.58315 3.79713C1.48315 4.34763 1.55345 4.91554 1.78466 5.42504C1.26044 5.62157 0.80869 5.97341 0.489781 6.43355C0.170873 6.89368 0 7.4402 0 8.00004C0 8.55989 0.170873 9.1064 0.489781 9.56654C0.80869 10.0267 1.26044 10.3785 1.78466 10.575C1.55345 11.0845 1.48315 11.6525 1.58315 12.203C1.68315 12.7535 1.94869 13.2604 2.34433 13.656C2.73996 14.0516 3.24687 14.3172 3.79737 14.4172C4.34787 14.5172 4.91578 14.4469 5.42529 14.2157C5.62181 14.7399 5.97365 15.1916 6.43379 15.5106C6.89393 15.8295 7.44044 16.0003 8.00029 16.0003C8.56014 16.0003 9.10665 15.8295 9.56678 15.5106C10.0269 15.1916 10.3788 14.7399 10.5753 14.2157C11.0848 14.4469 11.6527 14.5172 12.2032 14.4172C12.7537 14.3172 13.2606 14.0516 13.6562 13.656C14.0519 13.2604 14.3174 12.7535 14.4174 12.203C14.5174 11.6525 14.4471 11.0845 14.2159 10.575C14.7401 10.3785 15.1918 10.0266 15.5106 9.56648C15.8295 9.10634 16.0003 8.55986 16.0003 8.00004ZM6.00029 5.00004C6.19807 5.00004 6.39141 5.05869 6.55586 5.16857C6.72031 5.27846 6.84848 5.43464 6.92417 5.61736C6.99986 5.80009 7.01966 6.00115 6.98107 6.19513C6.94249 6.38912 6.84725 6.5673 6.7074 6.70715C6.56754 6.847 6.38936 6.94224 6.19538 6.98083C6.0014 7.01941 5.80033 6.99961 5.61761 6.92392C5.43488 6.84824 5.2787 6.72006 5.16882 6.55561C5.05894 6.39117 5.00029 6.19783 5.00029 6.00004C5.00029 5.73483 5.10565 5.48047 5.29318 5.29294C5.48072 5.1054 5.73507 5.00004 6.00029 5.00004ZM6.38404 10.6766C6.33761 10.723 6.28248 10.7599 6.22181 10.785C6.16114 10.8102 6.09612 10.8231 6.03044 10.8231C5.96477 10.8231 5.89975 10.8102 5.83908 10.785C5.77841 10.7599 5.72328 10.723 5.67685 10.6766L5.32341 10.3232C5.27697 10.2767 5.24013 10.2216 5.215 10.1609C5.18986 10.1003 5.17693 10.0352 5.17693 9.96957C5.17693 9.9039 5.18986 9.83888 5.215 9.77821C5.24013 9.71754 5.27697 9.66241 5.32341 9.61598L9.61623 5.32317C9.66266 5.27673 9.71778 5.23989 9.77845 5.21475C9.83912 5.18962 9.90415 5.17668 9.96982 5.17668C10.0355 5.17668 10.1005 5.18962 10.1612 5.21475C10.2219 5.23989 10.277 5.27673 10.3234 5.32317L10.6769 5.67661C10.7233 5.72304 10.7601 5.77816 10.7853 5.83883C10.8104 5.8995 10.8233 5.96453 10.8233 6.0302C10.8233 6.09587 10.8104 6.1609 10.7853 6.22157C10.7601 6.28224 10.7233 6.33736 10.6769 6.38379L6.38404 10.6766ZM10.0003 11C9.80251 11 9.60917 10.9414 9.44472 10.8315C9.28027 10.7216 9.1521 10.5655 9.07641 10.3827C9.00072 10.2 8.98092 9.99893 9.0195 9.80495C9.05809 9.61097 9.15333 9.43279 9.29318 9.29294C9.43303 9.15308 9.61122 9.05784 9.8052 9.01926C9.99918 8.98067 10.2002 9.00048 10.383 9.07616C10.5657 9.15185 10.7219 9.28002 10.8318 9.44447C10.9416 9.60892 11.0003 9.80226 11.0003 10C11.0003 10.2653 10.8949 10.5196 10.7074 10.7072C10.5199 10.8947 10.2655 11 10.0003 11Z"
          fill={fillColor}
        />
        <path
          id="Vector_2"
          d="M6 5C6.19778 5 6.39112 5.05865 6.55557 5.16853C6.72002 5.27841 6.84819 5.43459 6.92388 5.61732C6.99957 5.80004 7.01937 6.00111 6.98079 6.19509C6.9422 6.38907 6.84696 6.56725 6.70711 6.70711C6.56725 6.84696 6.38907 6.9422 6.19509 6.98079C6.00111 7.01937 5.80004 6.99957 5.61732 6.92388C5.43459 6.84819 5.27841 6.72002 5.16853 6.55557C5.05865 6.39112 5 6.19778 5 6C5 5.73478 5.10536 5.48043 5.29289 5.29289C5.48043 5.10536 5.73478 5 6 5ZM6.38375 10.6766C6.33732 10.723 6.28219 10.7598 6.22152 10.785C6.16085 10.8101 6.09583 10.823 6.03016 10.823C5.96449 10.823 5.89946 10.8101 5.83879 10.785C5.77812 10.7598 5.72299 10.723 5.67656 10.6766L5.32312 10.3231C5.27668 10.2767 5.23984 10.2216 5.21471 10.1609C5.18957 10.1002 5.17664 10.0352 5.17664 9.96953C5.17664 9.90386 5.18957 9.83883 5.21471 9.77816C5.23984 9.71749 5.27668 9.66237 5.32312 9.61594L9.61594 5.32312C9.66237 5.27668 9.71749 5.23984 9.77816 5.21471C9.83883 5.18957 9.90386 5.17664 9.96953 5.17664C10.0352 5.17664 10.1002 5.18957 10.1609 5.21471C10.2216 5.23984 10.2767 5.27668 10.3231 5.32312L10.6766 5.67656C10.723 5.72299 10.7598 5.77812 10.785 5.83879C10.8101 5.89946 10.823 5.96449 10.823 6.03016C10.823 6.09583 10.8101 6.16085 10.785 6.22152C10.7598 6.28219 10.723 6.33732 10.6766 6.38375L6.38375 10.6766ZM10 11C9.80222 11 9.60888 10.9414 9.44443 10.8315C9.27998 10.7216 9.15181 10.5654 9.07612 10.3827C9.00043 10.2 8.98063 9.99889 9.01921 9.80491C9.0578 9.61093 9.15304 9.43275 9.29289 9.29289C9.43275 9.15304 9.61093 9.0578 9.80491 9.01921C9.99889 8.98063 10.2 9.00043 10.3827 9.07612C10.5654 9.15181 10.7216 9.27998 10.8315 9.44443C10.9414 9.60888 11 9.80222 11 10C11 10.2652 10.8946 10.5196 10.7071 10.7071C10.5196 10.8946 10.2652 11 10 11Z"
          fill={fillColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_117193_127">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default BadgePercentSVG;