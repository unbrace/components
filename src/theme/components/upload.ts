import { DefaultTheme } from '..';

const getUploadTheme = (theme: DefaultTheme) => ({
  dropzone: {
    border: {
      radius: '3px',
      width: '2px',
      color: 'rgb(207, 212, 219)',
    },
    margin: {
      top: '8px',
      bottom: '2px',
    },
    inputWrapper: {
      borderRadius: '5px',
      padding: '0 10px 5px 0',
    },
  },
  dropzoneWrapper: {
    borderRadius: '8px',
    border: `1px solid ${theme.palette.neutral.shade3}`,
    boxShadow: `inset 0px 2px 2px ${theme.palette.neutral.shade3}`,
    margin: '10px 0 5px',
    text: {
      color: theme.palette.neutral.shade8,
    },
  },
  fileUpload: {
    padding: '0 50px',
    svgMarginRight: '32px',
    buttonMarginTop: '16px',
  },
  svgIcon: {
    fill: {
      primary: theme.palette.primary.shade5,
      secondary: theme.palette.secondary.shade5,
      warning: theme.palette.warning.shade5,
      tertiary: theme.palette.neutral.shade5,
      danger: theme.palette.danger.shade5,
    },
  },
});

export default getUploadTheme;
