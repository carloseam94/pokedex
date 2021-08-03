<script>
export default {
  middleware({ redirect }) {
    return redirect('301', '/page/1');
  },
};
</script>
