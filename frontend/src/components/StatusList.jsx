import React from 'react';
import { SelectPicker } from 'rsuite';

// Sentinel for the "all statuses" option.
const ALL_VALUE = '__all__';

const StatusList = ({
    selectedStatus,
    setSelectedStatus,
    statusList,
    className,
    menuClassName,
    placeholder = 'All',
    allLabel,
    cleanable = true
}) => {
    const data = statusList.map(item => ({
        label: item.label,
        value: item.value
    }));

    if (allLabel) {
        data.unshift({ label: allLabel, value: ALL_VALUE });
    }

    const handleChange = (value) => {
        setSelectedStatus(
            allLabel && value === ALL_VALUE ? null : value
        );
    };

    return (
        <SelectPicker
            className={className}
            menuClassName={menuClassName}
            size="sm"
            placeholder={placeholder}
            cleanable={cleanable}
            searchable={false}
            value={allLabel ? (selectedStatus ?? ALL_VALUE) : selectedStatus}
            data={data}
            onChange={handleChange}
        />
    );
};

export default StatusList;