# `dataDatabricksAwsUnityCatalogAssumeRolePolicy` Submodule <a name="`dataDatabricksAwsUnityCatalogAssumeRolePolicy` Submodule" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAwsUnityCatalogAssumeRolePolicy <a name="DataDatabricksAwsUnityCatalogAssumeRolePolicy" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/aws_unity_catalog_assume_role_policy databricks_aws_unity_catalog_assume_role_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksawsunitycatalogassumerolepolicy"

datadatabricksawsunitycatalogassumerolepolicy.NewDataDatabricksAwsUnityCatalogAssumeRolePolicy(scope Construct, id *string, config DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig) DataDatabricksAwsUnityCatalogAssumeRolePolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig">DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig">DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.resetAwsPartition">ResetAwsPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.resetUnityCatalogIamArn">ResetUnityCatalogIamArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAwsPartition` <a name="ResetAwsPartition" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.resetAwsPartition"></a>

```go
func ResetAwsPartition()
```

##### `ResetUnityCatalogIamArn` <a name="ResetUnityCatalogIamArn" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.resetUnityCatalogIamArn"></a>

```go
func ResetUnityCatalogIamArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksAwsUnityCatalogAssumeRolePolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksawsunitycatalogassumerolepolicy"

datadatabricksawsunitycatalogassumerolepolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksawsunitycatalogassumerolepolicy"

datadatabricksawsunitycatalogassumerolepolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksawsunitycatalogassumerolepolicy"

datadatabricksawsunitycatalogassumerolepolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksawsunitycatalogassumerolepolicy"

datadatabricksawsunitycatalogassumerolepolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatabricksAwsUnityCatalogAssumeRolePolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksAwsUnityCatalogAssumeRolePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksAwsUnityCatalogAssumeRolePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/aws_unity_catalog_assume_role_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksAwsUnityCatalogAssumeRolePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.json">Json</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.awsPartitionInput">AwsPartitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.externalIdInput">ExternalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.roleNameInput">RoleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.unityCatalogIamArnInput">UnityCatalogIamArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.awsPartition">AwsPartition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.roleName">RoleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.unityCatalogIamArn">UnityCatalogIamArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Json`<sup>Required</sup> <a name="Json" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.json"></a>

```go
func Json() *string
```

- *Type:* *string

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.awsAccountIdInput"></a>

```go
func AwsAccountIdInput() *string
```

- *Type:* *string

---

##### `AwsPartitionInput`<sup>Optional</sup> <a name="AwsPartitionInput" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.awsPartitionInput"></a>

```go
func AwsPartitionInput() *string
```

- *Type:* *string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.externalIdInput"></a>

```go
func ExternalIdInput() *string
```

- *Type:* *string

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.roleNameInput"></a>

```go
func RoleNameInput() *string
```

- *Type:* *string

---

##### `UnityCatalogIamArnInput`<sup>Optional</sup> <a name="UnityCatalogIamArnInput" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.unityCatalogIamArnInput"></a>

```go
func UnityCatalogIamArnInput() *string
```

- *Type:* *string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.awsAccountId"></a>

```go
func AwsAccountId() *string
```

- *Type:* *string

---

##### `AwsPartition`<sup>Required</sup> <a name="AwsPartition" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.awsPartition"></a>

```go
func AwsPartition() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.roleName"></a>

```go
func RoleName() *string
```

- *Type:* *string

---

##### `UnityCatalogIamArn`<sup>Required</sup> <a name="UnityCatalogIamArn" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.unityCatalogIamArn"></a>

```go
func UnityCatalogIamArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig <a name="DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksawsunitycatalogassumerolepolicy"

&datadatabricksawsunitycatalogassumerolepolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AwsAccountId: *string,
	ExternalId: *string,
	RoleName: *string,
	AwsPartition: *string,
	UnityCatalogIamArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/aws_unity_catalog_assume_role_policy#aws_account_id DataDatabricksAwsUnityCatalogAssumeRolePolicy#aws_account_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.externalId">ExternalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/aws_unity_catalog_assume_role_policy#external_id DataDatabricksAwsUnityCatalogAssumeRolePolicy#external_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.roleName">RoleName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/aws_unity_catalog_assume_role_policy#role_name DataDatabricksAwsUnityCatalogAssumeRolePolicy#role_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.awsPartition">AwsPartition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/aws_unity_catalog_assume_role_policy#aws_partition DataDatabricksAwsUnityCatalogAssumeRolePolicy#aws_partition}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.unityCatalogIamArn">UnityCatalogIamArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/aws_unity_catalog_assume_role_policy#unity_catalog_iam_arn DataDatabricksAwsUnityCatalogAssumeRolePolicy#unity_catalog_iam_arn}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.awsAccountId"></a>

```go
AwsAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/aws_unity_catalog_assume_role_policy#aws_account_id DataDatabricksAwsUnityCatalogAssumeRolePolicy#aws_account_id}.

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.externalId"></a>

```go
ExternalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/aws_unity_catalog_assume_role_policy#external_id DataDatabricksAwsUnityCatalogAssumeRolePolicy#external_id}.

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.roleName"></a>

```go
RoleName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/aws_unity_catalog_assume_role_policy#role_name DataDatabricksAwsUnityCatalogAssumeRolePolicy#role_name}.

---

##### `AwsPartition`<sup>Optional</sup> <a name="AwsPartition" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.awsPartition"></a>

```go
AwsPartition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/aws_unity_catalog_assume_role_policy#aws_partition DataDatabricksAwsUnityCatalogAssumeRolePolicy#aws_partition}.

---

##### `UnityCatalogIamArn`<sup>Optional</sup> <a name="UnityCatalogIamArn" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.unityCatalogIamArn"></a>

```go
UnityCatalogIamArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/aws_unity_catalog_assume_role_policy#unity_catalog_iam_arn DataDatabricksAwsUnityCatalogAssumeRolePolicy#unity_catalog_iam_arn}.

---



