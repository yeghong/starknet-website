import { Button } from "@chakra-ui/react";
import { preventVideoJSHotKeys } from "./utils";

export const EmbedButton = () => {
  return (
    <Button
      onKeyDown={preventVideoJSHotKeys}
      variant="unstyled"
      sx={{
        zIndex: 5,
        bg: "transparent",
        border: "none",
        cursor: "pointer",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        height={20}
        width={20}
      >
        <path
          fillRule="evenodd"
          d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
          clipRule="evenodd"
        />
      </svg>
    </Button>
  );
};
