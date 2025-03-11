export const CoreColorPlate = {
  light: {
    background: {
      primary: '#F8F8F8', // Slightly darker than default for better separation
      default: '#FFFFFF', // Clean and bright contrast
    },
    surface: {
      sidebar: '#F0F0F0', // Light gray for a seamless feel
      toolbox: '#F5F5F5', // Slightly lighter for differentiation
      card: '#EEEEEE', // More distinct from background for better contrast
    },
    text: {
      primary: '#212121', // Deep gray for readability
      secondary: '#616161', // Neutral gray for support text
      link: '#1976D2', // A deep blue that stands out while maintaining readability
      accent: '#1976D2', // Matching interactive elements
      disabled: '#A8A8A8', // Slightly toned-down disabled text
    },
    border: {
      default: '#E0E0E0', // Lighter, less intrusive border
    },
    controls: {
      background: 'transparent', // Minimalist approach
      icon: '#424242', // Dark gray for visibility
      button: {
        default: {
          background: '#505050', // Minimalistic neutral tone
          text: '#FFFFFF', // High contrast text
        },
        disabled: {
          background: '#F0F0F0', // Lighter gray for clarity
          text: '#A8A8A8', // Softer disabled text
        },
        outline: {
          background: 'transparent', // Clean outline style
          border: '#505050', // Neutral border
          text: '#505050', // Consistent with interactive elements
        },
        danger: {
          background: '#D32F2F', // Strong red for destructive actions
          text: '#FFFFFF', // White for maximum contrast
        },
      },
    },
  },
  dark: {
    background: {
      primary: '#181818', // Slightly lighter than deep black for depth
      default: '#202020', // Softer black for a refined look
    },
    surface: {
      sidebar: '#242424', // Dark gray with subtle contrast
      toolbox: '#2A2A2A', // Slightly lighter than sidebar for separation
      card: '#303030', // Dark gray for modal-like elements
    },
    text: {
      primary: '#E0E0E0', // Light gray for readability
      secondary: '#BDBDBD', // Softer gray for secondary text
      link: '#64B5F6', // Lighter blue for better contrast in dark mode
      accent: '#64B5F6', // Matching interactive elements
      disabled: '#757575', // Balanced disabled text color
    },
    border: {
      default: '#323232', // Subtle and refined border
    },
    controls: {
      background: 'transparent', // Minimalist approach
      icon: '#E0E0E0', // Lighter gray for better contrast
      button: {
        default: {
          background: '#A0A0A0', // Minimalistic neutral tone
          text: '#121212', // Dark text for contrast
        },
        disabled: {
          background: '#323232', // Blended dark gray
          text: '#757575', // Softer disabled text
        },
        outline: {
          background: 'transparent', // Clean outline style
          border: '#A0A0A0', // Neutral border
          text: '#A0A0A0', // Consistent with interactive elements
        },
        danger: {
          background: '#E57373', // Softer red for destructive actions
          text: '#121212', // Dark text for contrast
        },
      },
    },
  },
};
