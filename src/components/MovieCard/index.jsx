import { Container } from './styles'
import { Ratings } from '../Ratings'
import { Tag } from '../Tag'

export function MovieCard({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h2>{data.title}</h2>
      <Ratings rating={data.rating} />
      <p>{data.description}</p>

      {data.tags && (
        <footer>
          {data.tags.map(tag => (
            <Tag color="bg-2" key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  )
}
