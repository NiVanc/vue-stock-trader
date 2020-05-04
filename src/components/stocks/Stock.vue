<template>
  <div>
    <div class="col-sm-6 col-md-4">
      <div class="panel panel-success">
        <div class="panel-heading">
          <h3 class="panel-title">
            {{ stock.name }}
            <small>(Price: {{ stock.price }})</small>
          </h3>
        </div>
        <div class="panel-body">
          <div class="pull-left">
            <input type="number" class="form-control" placeholder="Quantity" />
          </div>
          <div class="pull-right">
            <button class="btn btn-success">Buy</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantity: 0
    };
  },
  props: ["stock"]
};
</script>