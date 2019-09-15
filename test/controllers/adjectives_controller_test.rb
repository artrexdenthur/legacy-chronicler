require 'test_helper'

class AdjectivesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get adjectives_index_url
    assert_response :success
  end

end
