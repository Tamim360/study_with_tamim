import React from 'react';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { notify } from '../../utilities/notify';

const AddService = () => {
    const navigate = useNavigate()
    useTitle('Add a service')
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const description = form.description.value;
        const price = form.price.value;

        const service = {
            name,
            image: photo,
            description,
            price
        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
          notify('Succesfully added service')
          navigate('/')
        })
    }

  return (
      
        <div className="hero">
      <div className="hero-content flex-col">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body pt-2">
          <h1 className="text-2xl font-bold text-center">Add a service</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Course Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Thumbnail URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Thumbnail URL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="Description"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="Price ex: 20/30/40"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn btn-primary rounded-full"
                value="Add Service"
              />
            </div>
          </form>
        </div>
      </div>
      </div>
    );
};

export default AddService;