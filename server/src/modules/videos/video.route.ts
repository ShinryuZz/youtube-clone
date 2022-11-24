import express from 'express'
import requireUser from '../../middleware/requireUser';
import { updateVideoHandler, uploadVideoHandler, findVideoHandler, streamVideoHandler } from './video.controller';

const router = express.Router();

router.post('/', requireUser, uploadVideoHandler);

router.patch('/:videoId', requireUser, updateVideoHandler);
router.get('/:videoId', streamVideoHandler);


router.get('/', findVideoHandler);

export default router;