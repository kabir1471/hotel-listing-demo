import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import {COLORS, FONT_SIZES, SIZES} from '../../../../utills/constants';
import Button from '../../../Components/Button';
import {modalStyles} from './index.styles';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useHotelListing} from '../..';

const Filter = props => {
  const {closeModal} = props;
  const {sortAscending, sortDescending} = useHotelListing();
  return (
    <View>
      <Modal isVisible={true} onBackdropPress={closeModal}>
        <View style={modalStyles.container}>
          <Text style={modalStyles.title}>{'Filter by price'}</Text>
          <View style={modalStyles.buttonCOntainer}>
            <Button
              color={COLORS.LIGHT_TEXT}
              onPress={() => {
                closeModal();
                sortDescending();
              }}
              Icon={
                <MIcon
                  size={FONT_SIZES.TITLE}
                  name="order-numeric-descending"
                  color={COLORS.WHITE}
                />
              }
              title={'Ascending'}
            />
            <Button
              color={COLORS.PRIMARY}
              onPress={() => {
                closeModal();
                sortAscending();
              }}
              Icon={
                <MIcon
                  color={COLORS.WHITE}
                  size={FONT_SIZES.TITLE}
                  name="order-numeric-ascending"
                />
              }
              title={'Descending'}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({});
