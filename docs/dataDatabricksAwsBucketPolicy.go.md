# `data_databricks_aws_bucket_policy`

Refer to the Terraform Registory for docs: [`data_databricks_aws_bucket_policy`](https://registry.terraform.io/providers/databricks/databricks/1.22.0/docs/data-sources/aws_bucket_policy).

# `dataDatabricksAwsBucketPolicy` Submodule <a name="`dataDatabricksAwsBucketPolicy` Submodule" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAwsBucketPolicy <a name="DataDatabricksAwsBucketPolicy" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.22.0/docs/data-sources/aws_bucket_policy databricks_aws_bucket_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v9/datadatabricksawsbucketpolicy"

datadatabricksawsbucketpolicy.NewDataDatabricksAwsBucketPolicy(scope Construct, id *string, config DataDatabricksAwsBucketPolicyConfig) DataDatabricksAwsBucketPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig">DataDatabricksAwsBucketPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig">DataDatabricksAwsBucketPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.resetDatabricksAccountId">ResetDatabricksAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.resetDatabricksE2AccountId">ResetDatabricksE2AccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.resetFullAccessRole">ResetFullAccessRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDatabricksAccountId` <a name="ResetDatabricksAccountId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.resetDatabricksAccountId"></a>

```go
func ResetDatabricksAccountId()
```

##### `ResetDatabricksE2AccountId` <a name="ResetDatabricksE2AccountId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.resetDatabricksE2AccountId"></a>

```go
func ResetDatabricksE2AccountId()
```

##### `ResetFullAccessRole` <a name="ResetFullAccessRole" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.resetFullAccessRole"></a>

```go
func ResetFullAccessRole()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v9/datadatabricksawsbucketpolicy"

datadatabricksawsbucketpolicy.DataDatabricksAwsBucketPolicy_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v9/datadatabricksawsbucketpolicy"

datadatabricksawsbucketpolicy.DataDatabricksAwsBucketPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v9/datadatabricksawsbucketpolicy"

datadatabricksawsbucketpolicy.DataDatabricksAwsBucketPolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.json">Json</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.databricksAccountIdInput">DatabricksAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.databricksE2AccountIdInput">DatabricksE2AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.fullAccessRoleInput">FullAccessRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.databricksAccountId">DatabricksAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.databricksE2AccountId">DatabricksE2AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.fullAccessRole">FullAccessRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Json`<sup>Required</sup> <a name="Json" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.json"></a>

```go
func Json() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `DatabricksAccountIdInput`<sup>Optional</sup> <a name="DatabricksAccountIdInput" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.databricksAccountIdInput"></a>

```go
func DatabricksAccountIdInput() *string
```

- *Type:* *string

---

##### `DatabricksE2AccountIdInput`<sup>Optional</sup> <a name="DatabricksE2AccountIdInput" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.databricksE2AccountIdInput"></a>

```go
func DatabricksE2AccountIdInput() *string
```

- *Type:* *string

---

##### `FullAccessRoleInput`<sup>Optional</sup> <a name="FullAccessRoleInput" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.fullAccessRoleInput"></a>

```go
func FullAccessRoleInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `DatabricksAccountId`<sup>Required</sup> <a name="DatabricksAccountId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.databricksAccountId"></a>

```go
func DatabricksAccountId() *string
```

- *Type:* *string

---

##### `DatabricksE2AccountId`<sup>Required</sup> <a name="DatabricksE2AccountId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.databricksE2AccountId"></a>

```go
func DatabricksE2AccountId() *string
```

- *Type:* *string

---

##### `FullAccessRole`<sup>Required</sup> <a name="FullAccessRole" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.fullAccessRole"></a>

```go
func FullAccessRole() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAwsBucketPolicyConfig <a name="DataDatabricksAwsBucketPolicyConfig" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v9/datadatabricksawsbucketpolicy"

&datadatabricksawsbucketpolicy.DataDatabricksAwsBucketPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Bucket: *string,
	DatabricksAccountId: *string,
	DatabricksE2AccountId: *string,
	FullAccessRole: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.22.0/docs/data-sources/aws_bucket_policy#bucket DataDatabricksAwsBucketPolicy#bucket}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.databricksAccountId">DatabricksAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.22.0/docs/data-sources/aws_bucket_policy#databricks_account_id DataDatabricksAwsBucketPolicy#databricks_account_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.databricksE2AccountId">DatabricksE2AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.22.0/docs/data-sources/aws_bucket_policy#databricks_e2_account_id DataDatabricksAwsBucketPolicy#databricks_e2_account_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.fullAccessRole">FullAccessRole</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.22.0/docs/data-sources/aws_bucket_policy#full_access_role DataDatabricksAwsBucketPolicy#full_access_role}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.22.0/docs/data-sources/aws_bucket_policy#id DataDatabricksAwsBucketPolicy#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.22.0/docs/data-sources/aws_bucket_policy#bucket DataDatabricksAwsBucketPolicy#bucket}.

---

##### `DatabricksAccountId`<sup>Optional</sup> <a name="DatabricksAccountId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.databricksAccountId"></a>

```go
DatabricksAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.22.0/docs/data-sources/aws_bucket_policy#databricks_account_id DataDatabricksAwsBucketPolicy#databricks_account_id}.

---

##### `DatabricksE2AccountId`<sup>Optional</sup> <a name="DatabricksE2AccountId" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.databricksE2AccountId"></a>

```go
DatabricksE2AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.22.0/docs/data-sources/aws_bucket_policy#databricks_e2_account_id DataDatabricksAwsBucketPolicy#databricks_e2_account_id}.

---

##### `FullAccessRole`<sup>Optional</sup> <a name="FullAccessRole" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.fullAccessRole"></a>

```go
FullAccessRole *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.22.0/docs/data-sources/aws_bucket_policy#full_access_role DataDatabricksAwsBucketPolicy#full_access_role}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksAwsBucketPolicy.DataDatabricksAwsBucketPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.22.0/docs/data-sources/aws_bucket_policy#id DataDatabricksAwsBucketPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



