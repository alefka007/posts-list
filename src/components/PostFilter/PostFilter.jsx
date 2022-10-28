import React from 'react';
import MySelect from '../../UI/select/MySelect';
import styles from './PostFilter.module.css';
import { TextField, FormControl } from '@mui/material';

const PostFilter = ({filter, setFilter}) => {
    return (
      <FormControl
        className={styles.container} 
        fullWidth>
          <TextField
            sx={{marginTop: '10px'}}
            id="standard-basic" 
            label='Search...' 
            variant="standard"
            value={filter.query}
            onChange={e => setFilter({...filter, query: e.target.value })}
          />
          <MySelect
            className={styles.select}
            value={filter.sort}
            onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
            defaultValue='Sort by'
            options={[
              { value: 'title', name: 'by title' },
              { value: 'body', name: 'by description' }     
            ]}
          />
        </FormControl>
    );
};

export default PostFilter;