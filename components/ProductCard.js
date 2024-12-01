import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';

export default function ProductCard({ product }) {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto' }} />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
