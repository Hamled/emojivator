export default function() {
  this.get('/problems', function(db) {
    return {
      data: db.problems.map(function(item, index) {
        return {
          type: 'problems',
          id: index + 1,
          attributes: {
            'valid-inputs': item.validInputs,
            'target': item.target,
            'transforms': item.transforms
          }
        };
      })
    };
  });
}
