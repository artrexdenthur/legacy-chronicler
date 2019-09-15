require 'test_helper'

class NounsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get nouns_index_url
    assert_response :success
  end

end
