import * as React from "react";

type StarProps = React.SVGProps<SVGSVGElement> & {
  color?: string;
};

export const Star: React.FC<StarProps> = ({
  width,
  height,
  color,
  className,
  ...rest
}) => (
  <svg
    viewBox="0 -0.5 33 33"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    {...rest}
  >
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-903.000000, -411.000000)" fill={color || "currentColor"}>
        <g transform="translate(37.000000, 169.000000)">
          <g transform="translate(858.000000, 234.000000)">
            <g transform="translate(7.000000, 8.000000)">
              <polygon points="27.865 31.83 17.615 26.209 7.462 32.009 9.553 20.362 0.99 12.335 12.532 10.758 17.394 0 22.436 10.672 34 12.047 25.574 20.22" />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);
