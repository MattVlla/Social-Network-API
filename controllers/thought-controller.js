const { Thought, User } = require('../models');

const thoughtController = {

    getAllThoughts(req, res) {
        Thought.find({})
            .then((dbThought) => res.json(dbThought))
            .catch((err) => res.status(500).json(err));
    },

    getThoughtById(req, res) {
        Thought.findOne({ _id: params.id })
            .select('-__v')
            .then((dbThought) =>
                !dbThought
                    ? res.status(404).json({ message: 'No Thought with that ID' })
                    : res.json(dbThought)
            )
            .catch((err) => res.status(500).json(err));
    },

    createThought(req, res) {
        Thought.create(req.body)
            .then((dbThought) => res.json(dbThought))
            .catch((err) => res.status(500).json(err));
    },

    deletethought(req, res) {
        Thought.findOneAndDelete({ _id: params.id })
            .then(dbThought => {
                if (!dbThought) {
                    return res.status(404).json ({ message: 'No thought was found with this id.'})
                }
            })
            .then(() => res.json({ message: 'Thought deleted' }))
            .catch((err) => res.status(500).json(err));
    },

};