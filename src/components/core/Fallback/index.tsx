import {
  errorTextSelector,
  isErrorSelector,
} from '@store/modules/AppCommon/selectors';
import {RootState} from '@store/rootReducer';
import {getErrorMessage} from '@store/utils/errors';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {rem} from 'src/theme/rn-units';

export interface FallbackProps extends React.PropsWithChildren {
  errorText?: string;
  hasError: boolean;
}

export type FallbackState = {
  hasError: boolean;
  text?: string;
};

const mapStateToProps = (state: RootState) => ({
  hasError: isErrorSelector(state),
  errorText: errorTextSelector(state),
});

class FallbackClass extends React.Component<FallbackProps, FallbackState> {
  state: FallbackState = {hasError: false};

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <Text style={styles.header}>An unexpected error occured:</Text>
          <Text style={styles.description}>
            {this.state.text ?? ''}
            {'\n'}
            Please restart application
          </Text>
        </View>
      );
    }

    return this.props.children;
  }

  componentDidCatch(error: Error): void {
    this.setState({hasError: true, text: getErrorMessage(error)});
  }

  componentDidUpdate(prevProps: FallbackProps) {
    if (prevProps.hasError !== this.props.hasError) {
      this.setState({
        hasError: this.props.hasError,
        text: this.props.errorText,
      });
    }
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: rem(12),
    flex: 1,
  },
  header: {
    fontWeight: 600,
    fontSize: rem(16),
  },
  description: {
    fontSize: rem(12),
  },
});

export const Fallback = connect(mapStateToProps)(FallbackClass);
