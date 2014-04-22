describe('$.fn.searchQueryPopulator', function() {
  beforeEach(function() {
    fixture.load('search.html');
    $('.example-searches').searchQueryPopulator({
      $searchField: $('input#search_query')
    });
  });

  it('populates the search box with the clicked term', function() {
    $('a[data-query="apache"]').click();
    expect($('input#search_query').val()).toEqual('apache');
  });

  it('gives the search box focus after clicking a term', function() {
    var focusSpy = spyOn($.fn, 'focus');
    $('a[data-query="apache"]').click();
    expect(focusSpy).toHaveBeenCalled();
    // unfortanetely the below assertion does not work headlessly
    // expect($('input#search_query').is(':focus')).toBeTruthy();
  });

  it('re-populates the search box with the next clicked term', function() {
    $('input#search_query').val('old term')
    $('a[data-query="java"]').click();
    expect($('input#search_query').val()).toEqual('java');
  });
});