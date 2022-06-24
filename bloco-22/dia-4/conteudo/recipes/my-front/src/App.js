import React, { Component } from 'react';

class receitasList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      drinks: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/recipes')
      .then(response => response.json())
      .then((recipes) => this.setState(
        {
          recipes,
          isLoading: false,
        },
      ));

    fetch('http://localhost:3001/drinks')
    .then(response => response.json())
    .then((drinks) => this.setState(
      {
        drinks,
        isLoading: false,
      },
    ));

    // Requisição do tipo PUT
    fetch(`http://localhost:3001/recipes/2`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Macarrão ao alho e óleo',
        price: 40
      })
    });

    // Requisição do tipo DELETE
    fetch(`http://localhost:3001/recipes/4`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    });
  }

  render() {
    const { recipes, drinks, isLoading } = this.state;

    return (
      <div>
        <div>
          { isLoading }
          <div className='card-group'>
            { recipes.map((recipe) => (
              <div key={ recipe.id }>
                <h1>{ recipe.name }</h1>
                <span>Preço: { recipe.price }</span>
                <span>Tempo de preparo: { recipe.waitTime }</span>
              </div>
            ))}
            { drinks.map((drinks) => (
              <div key={ drinks.id }>
                <h1>{ drinks.name }</h1>
                <span>Preço: { drinks.price }</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default receitasList;