import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { AiOutlineSearch } from 'react-icons/ai'
import './navBar.css'



function SearchNav() {

    return (
        <div className='mobile-hide'>
            <Paper
                component="form"
                sx={{
                    p: '2px 4px', display: 'flex', alignItems: 'center', width: 250,
                    height: 30, backgroundColor: '#313234', color: '#464f54', border: '1px solid transparent',
                }}
            >
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                    <AiOutlineSearch />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1, color: '#464f54' }}
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
            </Paper>

        </div>
    )
}

export default SearchNav