const reactionSchema = require("./Reaction");
const { Schema, model, Types } = require('mongoose');

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        maxlength: 300
    },
    createddAt: {
        type: Data,
        default: Date.now
    },
    username: {
        type: String,
        required: true
    },
    reactions:
        [reactionSchema]
},
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
})

const Thought =model('Thought', thoughtSchema);

module.exports = Thought;