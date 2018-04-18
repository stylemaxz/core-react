import React, {Component} from 'react'

class FormComponent extends Component {
    render() {
        return(
            <div>
                <h2>Address Form</h2>
                <form> 
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" className="form-control" id="address" />
                </div>
                <button type="submit" class="btn btn-primary">Create</button>
                </form>
            </div>
        )
    }
}

export default FormComponent