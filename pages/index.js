import { createClient } from 'contentful';
import Card from '../components/Card';

const Recipes = ({ recipes }) => {
  console.log(recipes)
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <Card key={recipe.sys.id} recipe={recipe} />
      ))}
      <style jsx>
          {`
          .recipe-list{
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 20px 60px;
          }
          `}
      </style>
    </div>

  )
}

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACESS_TOKEN
  });

  const res = await client.getEntries({ content_type: 'recipe' });

  return {
    props: {
      recipes: res.items
    },
    revalidate: 2

  }
}

export default Recipes;