import { Flex, Grid, Provider, TextField, View, defaultTheme, Button } from '@adobe/react-spectrum'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function ProductForm() {
  let [title, setTitle] = useState<string>("");
  let [price, setPrice] = useState<number>(0);
  let navigate = useNavigate();
  function doSubmit() {
    let product = {
      title,
      price
    }
    axios.post("http://localhost:1234/products", product).then(response => {
      navigate("/");
    });
  }
  return (
    <Provider theme={defaultTheme}>
      <Grid
        areas={[
          'header  header',
          'sidebar content',
          'footer  footer'
        ]}
        columns={['1fr', '3fr']}
        rows={['size-1000', 'auto', 'size-1000']}
        height="size-6000"
        gap="size-100">
        <View backgroundColor="celery-600" gridArea="header"> Product Form</View>
        <View backgroundColor="blue-600" gridArea="sidebar" />
        <View gridArea="content">
          <Flex direction="column" gap="size-150">
            <TextField
              onChange={setTitle}
              label="Title" />
            <TextField
              onChange={(data) => setPrice(+data)}
              label="Price" />
            <Button variant="accent" type='button' onPress={doSubmit}>Save</Button>
          </Flex>
        </View>
        <View backgroundColor="magenta-600" gridArea="footer" />
      </Grid>
    </Provider>
  )
}
