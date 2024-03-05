import React from 'react'

export const ProductCard = ({cardBook}) => {
    console.log(cardBook)
  return (
        <div className='col-sm-6 col-md-4 col-12'>
            <div className='card w-75 m-auto my-3'>
                <div className='card-header bg-info'><h3>Books' Information</h3></div>
                <div className='card-body bg-light'>
                    <h5><span className='text-danger'>Book's Id: </span> {cardBook.id}</h5>
                    <h5><span className='text-danger'>Book's Title: </span> {cardBook.title}</h5>
                    <h5><span className='text-danger'>Book's Price:</span> {cardBook.price}</h5>
                </div>
                <div className='card-footer bg-primary'>
                    <button className='btn btn-sm btn-warning'>Remove</button>
                </div>
            </div>
        </div>
  )
}
