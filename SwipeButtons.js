import React from 'react';
import './SwipeButtons.css';
import ReplayTwoToneIcon from '@material-ui/icons/ReplayTwoTone';
import CloseTwoToneIcon from '@material-ui/icons/CloseTwoTone';
import StarRateTwoToneIcon from '@material-ui/icons/StarRateTwoTone';
import FavoriteBorderTwoToneIcon from '@material-ui/icons/FavoriteBorderTwoTone';
import FlashOnTwoToneIcon from '@material-ui/icons/FlashOnTwoTone';
import IconButton from '@material-ui/core/IconButton';

function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons_repeat">
                <ReplayTwoToneIcon fontSize='large'/>
            </IconButton>
            <IconButton className="swipeButtons_left">
                <CloseTwoToneIcon fontSize='large'/>
            </IconButton>
            <IconButton className="swipeButtons_star">
                <StarRateTwoToneIcon fontSize='large'/>
            </IconButton>
            <IconButton className="swipeButtons_right">
                <FavoriteBorderTwoToneIcon fontSize='large'/>
            </IconButton>
            <IconButton className="swipeButtons_lightning">
                <FlashOnTwoToneIcon fontSize='large'/>
            </IconButton>            
        </div>
    );
}

export default SwipeButtons
