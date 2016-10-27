angular.module('starter.services', [])

.factory('News', function(){
    var news = [
            {
                id: 0,
                title: 'Noticia 1',
                text: 'Lorem Ipsum',
                img:  'https://thumbs.dreamstime.com/x/teste-padro-sem-emenda-jornalismo-notcia-viva-notcia-do-mundo-45302285.jpg',
                textFull: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum leo vitae vehicula placerat. Quisque feugiat tellus vel libero commodo, eget viverra tellus ultricies. Nunc eros ligula, consequat non turpis pharetra, cursus fermentum lacus. Suspendisse consequat leo vel nunc luctus, vel sodales justo commodo. Nulla facilisi. Praesent nec consequat lacus. Curabitur a scelerisque tellus. Morbi pretium velit egestas eros molestie dapibus. Cras lobortis volutpat consequat.'
            },{
                id: 1,
                title: 'Noticia 2',
                text: 'Lorem Ipsum',
                img:  'https://thumbs.dreamstime.com/x/teste-padro-sem-emenda-jornalismo-notcia-viva-notcia-do-mundo-45302285.jpg',
                textFull: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum leo vitae vehicula placerat. Quisque feugiat tellus vel libero commodo, eget viverra tellus ultricies. Nunc eros ligula, consequat non turpis pharetra, cursus fermentum lacus. Suspendisse consequat leo vel nunc luctus, vel sodales justo commodo. Nulla facilisi. Praesent nec consequat lacus. Curabitur a scelerisque tellus. Morbi pretium velit egestas eros molestie dapibus. Cras lobortis volutpat consequat.'
            },{
                id: 2,
                title: 'Noticia 3',
                text: 'Lorem Ipsum',
                img:  'https://thumbs.dreamstime.com/x/teste-padro-sem-emenda-jornalismo-notcia-viva-notcia-do-mundo-45302285.jpg',
                textFull: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum leo vitae vehicula placerat. Quisque feugiat tellus vel libero commodo, eget viverra tellus ultricies. Nunc eros ligula, consequat non turpis pharetra, cursus fermentum lacus. Suspendisse consequat leo vel nunc luctus, vel sodales justo commodo. Nulla facilisi. Praesent nec consequat lacus. Curabitur a scelerisque tellus. Morbi pretium velit egestas eros molestie dapibus. Cras lobortis volutpat consequat.'
            },{
                id: 3,
                title: 'Noticia 4',
                text: 'Lorem Ipsum',
                img:  'https://thumbs.dreamstime.com/x/teste-padro-sem-emenda-jornalismo-notcia-viva-notcia-do-mundo-45302285.jpg',
                textFull: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum leo vitae vehicula placerat. Quisque feugiat tellus vel libero commodo, eget viverra tellus ultricies. Nunc eros ligula, consequat non turpis pharetra, cursus fermentum lacus. Suspendisse consequat leo vel nunc luctus, vel sodales justo commodo. Nulla facilisi. Praesent nec consequat lacus. Curabitur a scelerisque tellus. Morbi pretium velit egestas eros molestie dapibus. Cras lobortis volutpat consequat.'
            },{
                id: 4,
                title: 'Noticia 5',
                text: 'Lorem Ipsum',
                img:  'https://thumbs.dreamstime.com/x/teste-padro-sem-emenda-jornalismo-notcia-viva-notcia-do-mundo-45302285.jpg',
                textFull: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum leo vitae vehicula placerat. Quisque feugiat tellus vel libero commodo, eget viverra tellus ultricies. Nunc eros ligula, consequat non turpis pharetra, cursus fermentum lacus. Suspendisse consequat leo vel nunc luctus, vel sodales justo commodo. Nulla facilisi. Praesent nec consequat lacus. Curabitur a scelerisque tellus. Morbi pretium velit egestas eros molestie dapibus. Cras lobortis volutpat consequat.'
            }
        ];

        return{
            all: function(){
                return news;
            },

            get: function(newsId){
                for(var i=0; i < news.length; i++ ){
                    if(news[i].id === parseInt(newsId)){
                        return news[i];
                    }
                }

                return null;
            }
        }
})