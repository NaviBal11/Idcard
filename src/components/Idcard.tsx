import { FieldValues } from "react-hook-form";

interface Props {
  formData: FieldValues | null;
  selectedFile: string | undefined;
}
const Idcard = ({ formData, selectedFile }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={487}
      height={300}
      viewBox="0 0 128.852 79.375"
    >
      <g transform="translate(.53 -100.53)">
        <rect
          width={130.345}
          height={80.532}
          x={-1.276}
          y={99.951}
          ry={0}
          style={{
            fill: "#fff",
            strokeWidth: 8.78781,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            paintOrder: "stroke markers fill",
          }}
        />
        <path
          d="M.142 162.497h109.539v17.408H.142ZM16.69 146.81h76.443c9.168 0 16.548 7.38 16.548 16.548 0 9.167-7.38 16.548-16.548 16.548H16.69A16.512 16.512 0 0 1 .142 163.357c0-9.168 7.38-16.548 16.548-16.548zm2.094 0h109.538v33.096H18.784Z"
          style={{
            fill: "#5dd79e",
            strokeWidth: 3.62621,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            paintOrder: "stroke markers fill",
            fillOpacity: 1,
          }}
        />
        <rect
          width={44.964}
          height={49.401}
          x={76.383}
          y={108.221}
          ry={2.51}
          style={{
            fill: "#545454",
            strokeWidth: 4.99999,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            paintOrder: "stroke markers fill",
            fillOpacity: 1,
          }}
        />
        <image
          width={44.964}
          height={49.401}
          x={76.383}
          y={108.221}
          ry={2.51}
          preserveAspectRatio="none"
          href={selectedFile ? selectedFile : undefined}
        />
        <text
          xmlSpace="preserve"
          x={87.373}
          y={166.056}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 400,
            fontStretch: "normal",
            fontSize: "5.86628px",
            lineHeight: "125%",
            fontFamily: "Sans",

            textAlign: "start",
            letterSpacing: 0,
            wordSpacing: 0,

            textAnchor: "start",
            fill: "#000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: ".533297px",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
          }}
        >
          <tspan
            x={87.373}
            y={166.056}
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 700,
              fontStretch: "normal",
              fontSize: "5.86628px",
              fontFamily: "Arial",

              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
              strokeWidth: ".533297px",
            }}
          >
            {"Member"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          x={18.119}
          y={167.239}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 400,
            fontStretch: "normal",
            fontSize: "5.86628px",
            lineHeight: "125%",
            fontFamily: "Sans",

            textAlign: "start",
            letterSpacing: 0,
            wordSpacing: 0,

            textAnchor: "start",
            fill: "#000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: ".533297px",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
          }}
        >
          <tspan
            x={18.119}
            y={167.239}
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 700,
              fontStretch: "normal",
              fontSize: "5.86628px",
              fontFamily: "Arial",

              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
              strokeWidth: ".533297px",
            }}
          >
            {formData && formData.dob}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          x={4.386}
          y={166.208}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 700,
            fontStretch: "normal",
            fontSize: "2.91042px",
            lineHeight: "125%",
            fontFamily: "Arial",

            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
            textAlign: "start",
            letterSpacing: 0,
            wordSpacing: 0,

            textAnchor: "start",
            fill: "#545454",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: ".264583px",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
          }}
        >
          <tspan
            x={4.386}
            y={166.208}
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 700,
              fontStretch: "normal",
              fontSize: "2.91042px",
              fontFamily: "Arial",

              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
              strokeWidth: ".264583px",
              fill: "#545454",
              fillOpacity: 1,
            }}
          >
            {"D.O.B"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          x={10.477}
          y={174.423}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 400,
            fontStretch: "normal",
            fontSize: "5.86628px",
            lineHeight: "125%",
            fontFamily: "Sans",

            textAlign: "start",
            letterSpacing: 0,
            wordSpacing: 0,

            textAnchor: "start",
            fill: "#000",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: ".533297px",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
          }}
        >
          <tspan
            x={17.477}
            y={174.423}
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 700,
              fontStretch: "normal",
              fontSize: "5.86628px",
              fontFamily: "Arial",

              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
              strokeWidth: ".533297px",
            }}
          >
            {formData && formData.name}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          x={4.386}
          y={166.208}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 700,
            fontStretch: "normal",
            fontSize: "2.91042px",
            lineHeight: "125%",
            fontFamily: "Arial",

            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
            textAlign: "start",
            letterSpacing: 0,
            wordSpacing: 0,

            textAnchor: "start",
            fill: "#545454",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: ".264583px",
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
          }}
        >
          <tspan
            x={4.386}
            y={174.208}
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 700,
              fontStretch: "normal",
              fontSize: "2.91042px",
              fontFamily: "Arial",

              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
              strokeWidth: ".264583px",
              fill: "#545454",
              fillOpacity: 1,
            }}
          >
            {"Name"}
          </tspan>
        </text>
      </g>
    </svg>
  );
};
export default Idcard;
