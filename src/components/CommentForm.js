import React from 'react';

export default class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      opinion: props.comment ? props.comment.opinion: '',
      error: ''
    };

  }
  onOpinionChange = (e) => {
    const opinion = e.target.value;
    this.setState(() => ({ opinion }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.opinion) {
      this.setState(() => ({ error: 'Fine don\'t leave a footnote see if I care...' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        opinion: this.state.opinion
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <textarea rows="4" cols="50"
            type="text"
            placeholder="Enter your Footnote here!"
            value={this.state.opinion}
            onChange={this.onOpinionChange}
          >
          </textarea>
          <div>
          <button className="button">Add Footnote</button>
          </div>
        </form>
      </div>
    )
  }
}
