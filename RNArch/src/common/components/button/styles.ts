import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    paddingVertical: 17,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  normalButton: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  outlinedButton: {
    borderWidth: 1.5,
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
  buttonDisabled: {
    shadowOpacity: 0,
    elevation: 0,
    opacity: 0.5,
  },
});

export default styles;
