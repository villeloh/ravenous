
const apiKey = '8O_HD2vR7DK3KWL1Ix9eLZ1X_oeuLXYabxKqgKyk72XcoEGAkFQAXsbIiHwLKDD_Q4CQlMIJasCkssHNcclnCYE4ysnGatMRSSmCvXaZbY8SlwQU_BDXib_5LoznWnYx';

const Yelp = {

    search(term, location, sortBy) {

        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
        { headers: { Authorization: `Bearer ${apiKey}` } })
        .then(response => {

            return response.json();
        }).then(jsonResponse => {

            if (jsonResponse.businesses) {

                return jsonResponse.businesses.map(business => {

                    let category = 'no category';

                    if (business.categories[0]) {
                        category = business.categories[0].title; // it seems to not exist at times...
                    }

                    return {

                        id: business.id,       
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: category,
                        rating: business.rating,
                        reviewCount: business.review_count 
                    };
                });
            }
        });
    } // end search()
};

export default Yelp;
