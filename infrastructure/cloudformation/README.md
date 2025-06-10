# Nested CloudFormation Templates

This directory contains a set of nested CloudFormation templates for deploying VegaWebAWS infrastructure.

## Template Structure

- `main-template.yaml` - The main template that orchestrates all nested stacks
- `templates/` - Directory containing all nested templates:
  - `security-groups.yaml` - Security group resources
  - Add more template descriptions as you create them

## Deployment

To deploy this stack:

```bash
aws cloudformation deploy \
  --template-file main-template.yaml \
  --stack-name VegaWebAWS \
  --parameter-overrides \
      Environment=dev \
      VpcId=vpc-03de7ad5a4c7c1822 \
      SubnetIds=subnet-02615277a84a5fcb4 \
  --capabilities CAPABILITY_IAM
```

## Benefits of Nested Templates

1. **Modularity**: Each component is isolated in its own template
2. **Reusability**: Templates can be reused across different projects
3. **Maintainability**: Easier to update individual components
4. **Organization**: Better organization of complex infrastructure
5. **Parallel Processing**: AWS can process nested stacks in parallel, potentially speeding up deployment
