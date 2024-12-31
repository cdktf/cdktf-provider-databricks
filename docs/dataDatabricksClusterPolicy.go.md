# `dataDatabricksClusterPolicy` Submodule <a name="`dataDatabricksClusterPolicy` Submodule" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksClusterPolicy <a name="DataDatabricksClusterPolicy" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster_policy databricks_cluster_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksclusterpolicy"

datadatabricksclusterpolicy.NewDataDatabricksClusterPolicy(scope Construct, id *string, config DataDatabricksClusterPolicyConfig) DataDatabricksClusterPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig">DataDatabricksClusterPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig">DataDatabricksClusterPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetDefinition">ResetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetIsDefault">ResetIsDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetMaxClustersPerUser">ResetMaxClustersPerUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetPolicyFamilyDefinitionOverrides">ResetPolicyFamilyDefinitionOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetPolicyFamilyId">ResetPolicyFamilyId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDefinition` <a name="ResetDefinition" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetDefinition"></a>

```go
func ResetDefinition()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetIsDefault` <a name="ResetIsDefault" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetIsDefault"></a>

```go
func ResetIsDefault()
```

##### `ResetMaxClustersPerUser` <a name="ResetMaxClustersPerUser" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetMaxClustersPerUser"></a>

```go
func ResetMaxClustersPerUser()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetName"></a>

```go
func ResetName()
```

##### `ResetPolicyFamilyDefinitionOverrides` <a name="ResetPolicyFamilyDefinitionOverrides" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetPolicyFamilyDefinitionOverrides"></a>

```go
func ResetPolicyFamilyDefinitionOverrides()
```

##### `ResetPolicyFamilyId` <a name="ResetPolicyFamilyId" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.resetPolicyFamilyId"></a>

```go
func ResetPolicyFamilyId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksClusterPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksclusterpolicy"

datadatabricksclusterpolicy.DataDatabricksClusterPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksclusterpolicy"

datadatabricksclusterpolicy.DataDatabricksClusterPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksclusterpolicy"

datadatabricksclusterpolicy.DataDatabricksClusterPolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksclusterpolicy"

datadatabricksclusterpolicy.DataDatabricksClusterPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatabricksClusterPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksClusterPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksClusterPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksClusterPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.definitionInput">DefinitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.isDefaultInput">IsDefaultInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.maxClustersPerUserInput">MaxClustersPerUserInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.policyFamilyDefinitionOverridesInput">PolicyFamilyDefinitionOverridesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.policyFamilyIdInput">PolicyFamilyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.definition">Definition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.isDefault">IsDefault</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.maxClustersPerUser">MaxClustersPerUser</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.policyFamilyDefinitionOverrides">PolicyFamilyDefinitionOverrides</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.policyFamilyId">PolicyFamilyId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DefinitionInput`<sup>Optional</sup> <a name="DefinitionInput" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.definitionInput"></a>

```go
func DefinitionInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsDefaultInput`<sup>Optional</sup> <a name="IsDefaultInput" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.isDefaultInput"></a>

```go
func IsDefaultInput() interface{}
```

- *Type:* interface{}

---

##### `MaxClustersPerUserInput`<sup>Optional</sup> <a name="MaxClustersPerUserInput" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.maxClustersPerUserInput"></a>

```go
func MaxClustersPerUserInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PolicyFamilyDefinitionOverridesInput`<sup>Optional</sup> <a name="PolicyFamilyDefinitionOverridesInput" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.policyFamilyDefinitionOverridesInput"></a>

```go
func PolicyFamilyDefinitionOverridesInput() *string
```

- *Type:* *string

---

##### `PolicyFamilyIdInput`<sup>Optional</sup> <a name="PolicyFamilyIdInput" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.policyFamilyIdInput"></a>

```go
func PolicyFamilyIdInput() *string
```

- *Type:* *string

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.definition"></a>

```go
func Definition() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.isDefault"></a>

```go
func IsDefault() interface{}
```

- *Type:* interface{}

---

##### `MaxClustersPerUser`<sup>Required</sup> <a name="MaxClustersPerUser" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.maxClustersPerUser"></a>

```go
func MaxClustersPerUser() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PolicyFamilyDefinitionOverrides`<sup>Required</sup> <a name="PolicyFamilyDefinitionOverrides" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.policyFamilyDefinitionOverrides"></a>

```go
func PolicyFamilyDefinitionOverrides() *string
```

- *Type:* *string

---

##### `PolicyFamilyId`<sup>Required</sup> <a name="PolicyFamilyId" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.policyFamilyId"></a>

```go
func PolicyFamilyId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksClusterPolicyConfig <a name="DataDatabricksClusterPolicyConfig" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksclusterpolicy"

&datadatabricksclusterpolicy.DataDatabricksClusterPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Definition: *string,
	Description: *string,
	Id: *string,
	IsDefault: interface{},
	MaxClustersPerUser: *f64,
	Name: *string,
	PolicyFamilyDefinitionOverrides: *string,
	PolicyFamilyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.definition">Definition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster_policy#definition DataDatabricksClusterPolicy#definition}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster_policy#description DataDatabricksClusterPolicy#description}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster_policy#id DataDatabricksClusterPolicy#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.isDefault">IsDefault</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster_policy#is_default DataDatabricksClusterPolicy#is_default}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.maxClustersPerUser">MaxClustersPerUser</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster_policy#max_clusters_per_user DataDatabricksClusterPolicy#max_clusters_per_user}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster_policy#name DataDatabricksClusterPolicy#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.policyFamilyDefinitionOverrides">PolicyFamilyDefinitionOverrides</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster_policy#policy_family_definition_overrides DataDatabricksClusterPolicy#policy_family_definition_overrides}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.policyFamilyId">PolicyFamilyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster_policy#policy_family_id DataDatabricksClusterPolicy#policy_family_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Definition`<sup>Optional</sup> <a name="Definition" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.definition"></a>

```go
Definition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster_policy#definition DataDatabricksClusterPolicy#definition}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster_policy#description DataDatabricksClusterPolicy#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster_policy#id DataDatabricksClusterPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsDefault`<sup>Optional</sup> <a name="IsDefault" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.isDefault"></a>

```go
IsDefault interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster_policy#is_default DataDatabricksClusterPolicy#is_default}.

---

##### `MaxClustersPerUser`<sup>Optional</sup> <a name="MaxClustersPerUser" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.maxClustersPerUser"></a>

```go
MaxClustersPerUser *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster_policy#max_clusters_per_user DataDatabricksClusterPolicy#max_clusters_per_user}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster_policy#name DataDatabricksClusterPolicy#name}.

---

##### `PolicyFamilyDefinitionOverrides`<sup>Optional</sup> <a name="PolicyFamilyDefinitionOverrides" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.policyFamilyDefinitionOverrides"></a>

```go
PolicyFamilyDefinitionOverrides *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster_policy#policy_family_definition_overrides DataDatabricksClusterPolicy#policy_family_definition_overrides}.

---

##### `PolicyFamilyId`<sup>Optional</sup> <a name="PolicyFamilyId" id="@cdktf/provider-databricks.dataDatabricksClusterPolicy.DataDatabricksClusterPolicyConfig.property.policyFamilyId"></a>

```go
PolicyFamilyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/data-sources/cluster_policy#policy_family_id DataDatabricksClusterPolicy#policy_family_id}.

---



