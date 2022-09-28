const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    deletethought
} = require('../../controllers/thought-controller');

router.route('/').get(getAllThoughts).post(createThought);

router.route('/:Id').get(createThought);

router.route('/:Id/:thoughtId').delete(deletethought);

module.exports = router;