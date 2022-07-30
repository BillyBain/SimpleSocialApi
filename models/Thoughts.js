const { Schema, model } = require('mongoose');
const Reactions = require('./Reactions');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    reactions: [Reactions]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('getReactions').get(function () {
    return this.reactions.length;
  });

const Thoughts = model('thoughts', thoughtSchema);

module.exports = Thoughts;
