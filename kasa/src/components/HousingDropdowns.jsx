import React from 'react';
import Dropdown from './Dropdown';

function HousingDropdowns({ description, equipments }) {
  const dropdownContainerStyles = {
    width: '250px',
    marginRight: '20px',
  };

  const dropdownFontSize = {
    fontSize: '16px',
  };

  const descriptionDropdownContent = description
    ? {
        h4: 'Description',
        article: [description],
      }
    : null;

  const equipmentDropdownContent = equipments
    ? {
        h4: 'Equipments',
        article: equipments,
      }
    : null;

  return (
    <div>
      {descriptionDropdownContent && (
        <Dropdown
          dropdownContent={descriptionDropdownContent}
          dropdownContainerStyles={dropdownContainerStyles}
          dropdownFontSize={dropdownFontSize}
        />
      )}
      {equipmentDropdownContent && (
        <Dropdown
          dropdownContent={equipmentDropdownContent}
          dropdownContainerStyles={dropdownContainerStyles}
          dropdownFontSize={dropdownFontSize}
        />
      )}
    </div>
  );
}

export default HousingDropdowns;