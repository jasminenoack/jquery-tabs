# jquery-tabs

This is a jquery plugin used to create tabs in [KnowledgEase.com](http://www.knowledgease.com).

To use this plugin: 

1. Create a div with the class "Wrapper" used to size the tabs. Inside that:  
2. Create a main tag with the class "content-tabs". Inside that: 
  1. Include the CSS and JavaScript in your project. 
  2. Give the tabs a class of "tab". 
  3. Give the content sections a class of "tab-pane"
3. Run this script at the bottom of your file: 

    <script>
      $(function() {
        $('#content-tabs').Tabs();
      })
    </script>
