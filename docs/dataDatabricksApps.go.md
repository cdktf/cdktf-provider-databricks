# `dataDatabricksApps` Submodule <a name="`dataDatabricksApps` Submodule" id="@cdktf/provider-databricks.dataDatabricksApps"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksApps <a name="DataDatabricksApps" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps databricks_apps}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksapps"

datadatabricksapps.NewDataDatabricksApps(scope Construct, id *string, config DataDatabricksAppsConfig) DataDatabricksApps
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig">DataDatabricksAppsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig">DataDatabricksAppsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksAppsProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfig">DataDatabricksAppsProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksApps resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksapps"

datadatabricksapps.DataDatabricksApps_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksapps"

datadatabricksapps.DataDatabricksApps_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksapps"

datadatabricksapps.DataDatabricksApps_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksapps"

datadatabricksapps.DataDatabricksApps_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatabricksApps resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksApps to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksApps that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksApps to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.app">App</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList">DataDatabricksAppsAppList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference">DataDatabricksAppsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `App`<sup>Required</sup> <a name="App" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.app"></a>

```go
func App() DataDatabricksAppsAppList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList">DataDatabricksAppsAppList</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksAppsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference">DataDatabricksAppsProviderConfigOutputReference</a>

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksApps.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAppsApp <a name="DataDatabricksAppsApp" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksapps"

&datadatabricksapps.DataDatabricksAppsApp {
	Name: *string,
	BudgetPolicyId: *string,
	ComputeSize: *string,
	Description: *string,
	Resources: interface{},
	UserApiScopes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#name DataDatabricksApps#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.budgetPolicyId">BudgetPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#budget_policy_id DataDatabricksApps#budget_policy_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.computeSize">ComputeSize</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#compute_size DataDatabricksApps#compute_size}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#description DataDatabricksApps#description}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.resources">Resources</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#resources DataDatabricksApps#resources}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.userApiScopes">UserApiScopes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#user_api_scopes DataDatabricksApps#user_api_scopes}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#name DataDatabricksApps#name}.

---

##### `BudgetPolicyId`<sup>Optional</sup> <a name="BudgetPolicyId" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.budgetPolicyId"></a>

```go
BudgetPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#budget_policy_id DataDatabricksApps#budget_policy_id}.

---

##### `ComputeSize`<sup>Optional</sup> <a name="ComputeSize" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.computeSize"></a>

```go
ComputeSize *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#compute_size DataDatabricksApps#compute_size}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#description DataDatabricksApps#description}.

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.resources"></a>

```go
Resources interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#resources DataDatabricksApps#resources}.

---

##### `UserApiScopes`<sup>Optional</sup> <a name="UserApiScopes" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp.property.userApiScopes"></a>

```go
UserApiScopes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#user_api_scopes DataDatabricksApps#user_api_scopes}.

---

### DataDatabricksAppsAppActiveDeployment <a name="DataDatabricksAppsAppActiveDeployment" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksapps"

&datadatabricksapps.DataDatabricksAppsAppActiveDeployment {
	DeploymentId: *string,
	Mode: *string,
	SourceCodePath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment.property.deploymentId">DeploymentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#deployment_id DataDatabricksApps#deployment_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#mode DataDatabricksApps#mode}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment.property.sourceCodePath">SourceCodePath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}. |

---

##### `DeploymentId`<sup>Optional</sup> <a name="DeploymentId" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment.property.deploymentId"></a>

```go
DeploymentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#deployment_id DataDatabricksApps#deployment_id}.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#mode DataDatabricksApps#mode}.

---

##### `SourceCodePath`<sup>Optional</sup> <a name="SourceCodePath" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment.property.sourceCodePath"></a>

```go
SourceCodePath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}.

---

### DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts <a name="DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksapps"

&datadatabricksapps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts {
	SourceCodePath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts.property.sourceCodePath">SourceCodePath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}. |

---

##### `SourceCodePath`<sup>Optional</sup> <a name="SourceCodePath" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts.property.sourceCodePath"></a>

```go
SourceCodePath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}.

---

### DataDatabricksAppsAppActiveDeploymentStatus <a name="DataDatabricksAppsAppActiveDeploymentStatus" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksapps"

&datadatabricksapps.DataDatabricksAppsAppActiveDeploymentStatus {

}
```


### DataDatabricksAppsAppAppStatus <a name="DataDatabricksAppsAppAppStatus" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksapps"

&datadatabricksapps.DataDatabricksAppsAppAppStatus {

}
```


### DataDatabricksAppsAppComputeStatus <a name="DataDatabricksAppsAppComputeStatus" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksapps"

&datadatabricksapps.DataDatabricksAppsAppComputeStatus {

}
```


### DataDatabricksAppsAppPendingDeployment <a name="DataDatabricksAppsAppPendingDeployment" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksapps"

&datadatabricksapps.DataDatabricksAppsAppPendingDeployment {
	DeploymentId: *string,
	Mode: *string,
	SourceCodePath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment.property.deploymentId">DeploymentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#deployment_id DataDatabricksApps#deployment_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#mode DataDatabricksApps#mode}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment.property.sourceCodePath">SourceCodePath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}. |

---

##### `DeploymentId`<sup>Optional</sup> <a name="DeploymentId" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment.property.deploymentId"></a>

```go
DeploymentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#deployment_id DataDatabricksApps#deployment_id}.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#mode DataDatabricksApps#mode}.

---

##### `SourceCodePath`<sup>Optional</sup> <a name="SourceCodePath" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment.property.sourceCodePath"></a>

```go
SourceCodePath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}.

---

### DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts <a name="DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksapps"

&datadatabricksapps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts {
	SourceCodePath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts.property.sourceCodePath">SourceCodePath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}. |

---

##### `SourceCodePath`<sup>Optional</sup> <a name="SourceCodePath" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts.property.sourceCodePath"></a>

```go
SourceCodePath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#source_code_path DataDatabricksApps#source_code_path}.

---

### DataDatabricksAppsAppPendingDeploymentStatus <a name="DataDatabricksAppsAppPendingDeploymentStatus" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksapps"

&datadatabricksapps.DataDatabricksAppsAppPendingDeploymentStatus {

}
```


### DataDatabricksAppsAppResources <a name="DataDatabricksAppsAppResources" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksapps"

&datadatabricksapps.DataDatabricksAppsAppResources {
	Name: *string,
	Database: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase,
	Description: *string,
	GenieSpace: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace,
	Job: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksApps.DataDatabricksAppsAppResourcesJob,
	Secret: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret,
	ServingEndpoint: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint,
	SqlWarehouse: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse,
	UcSecurable: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#name DataDatabricksApps#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.database">Database</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase">DataDatabricksAppsAppResourcesDatabase</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#database DataDatabricksApps#database}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#description DataDatabricksApps#description}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.genieSpace">GenieSpace</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace">DataDatabricksAppsAppResourcesGenieSpace</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#genie_space DataDatabricksApps#genie_space}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.job">Job</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob">DataDatabricksAppsAppResourcesJob</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#job DataDatabricksApps#job}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.secret">Secret</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret">DataDatabricksAppsAppResourcesSecret</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#secret DataDatabricksApps#secret}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.servingEndpoint">ServingEndpoint</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint">DataDatabricksAppsAppResourcesServingEndpoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#serving_endpoint DataDatabricksApps#serving_endpoint}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.sqlWarehouse">SqlWarehouse</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse">DataDatabricksAppsAppResourcesSqlWarehouse</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#sql_warehouse DataDatabricksApps#sql_warehouse}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.ucSecurable">UcSecurable</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable">DataDatabricksAppsAppResourcesUcSecurable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#uc_securable DataDatabricksApps#uc_securable}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#name DataDatabricksApps#name}.

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.database"></a>

```go
Database DataDatabricksAppsAppResourcesDatabase
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase">DataDatabricksAppsAppResourcesDatabase</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#database DataDatabricksApps#database}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#description DataDatabricksApps#description}.

---

##### `GenieSpace`<sup>Optional</sup> <a name="GenieSpace" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.genieSpace"></a>

```go
GenieSpace DataDatabricksAppsAppResourcesGenieSpace
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace">DataDatabricksAppsAppResourcesGenieSpace</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#genie_space DataDatabricksApps#genie_space}.

---

##### `Job`<sup>Optional</sup> <a name="Job" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.job"></a>

```go
Job DataDatabricksAppsAppResourcesJob
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob">DataDatabricksAppsAppResourcesJob</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#job DataDatabricksApps#job}.

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.secret"></a>

```go
Secret DataDatabricksAppsAppResourcesSecret
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret">DataDatabricksAppsAppResourcesSecret</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#secret DataDatabricksApps#secret}.

---

##### `ServingEndpoint`<sup>Optional</sup> <a name="ServingEndpoint" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.servingEndpoint"></a>

```go
ServingEndpoint DataDatabricksAppsAppResourcesServingEndpoint
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint">DataDatabricksAppsAppResourcesServingEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#serving_endpoint DataDatabricksApps#serving_endpoint}.

---

##### `SqlWarehouse`<sup>Optional</sup> <a name="SqlWarehouse" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.sqlWarehouse"></a>

```go
SqlWarehouse DataDatabricksAppsAppResourcesSqlWarehouse
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse">DataDatabricksAppsAppResourcesSqlWarehouse</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#sql_warehouse DataDatabricksApps#sql_warehouse}.

---

##### `UcSecurable`<sup>Optional</sup> <a name="UcSecurable" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResources.property.ucSecurable"></a>

```go
UcSecurable DataDatabricksAppsAppResourcesUcSecurable
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable">DataDatabricksAppsAppResourcesUcSecurable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#uc_securable DataDatabricksApps#uc_securable}.

---

### DataDatabricksAppsAppResourcesDatabase <a name="DataDatabricksAppsAppResourcesDatabase" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksapps"

&datadatabricksapps.DataDatabricksAppsAppResourcesDatabase {
	DatabaseName: *string,
	InstanceName: *string,
	Permission: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#database_name DataDatabricksApps#database_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase.property.instanceName">InstanceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#instance_name DataDatabricksApps#instance_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase.property.permission">Permission</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#permission DataDatabricksApps#permission}. |

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#database_name DataDatabricksApps#database_name}.

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase.property.instanceName"></a>

```go
InstanceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#instance_name DataDatabricksApps#instance_name}.

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase.property.permission"></a>

```go
Permission *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

### DataDatabricksAppsAppResourcesGenieSpace <a name="DataDatabricksAppsAppResourcesGenieSpace" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksapps"

&datadatabricksapps.DataDatabricksAppsAppResourcesGenieSpace {
	Name: *string,
	Permission: *string,
	SpaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#name DataDatabricksApps#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace.property.permission">Permission</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#permission DataDatabricksApps#permission}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace.property.spaceId">SpaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#space_id DataDatabricksApps#space_id}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#name DataDatabricksApps#name}.

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace.property.permission"></a>

```go
Permission *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

##### `SpaceId`<sup>Required</sup> <a name="SpaceId" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace.property.spaceId"></a>

```go
SpaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#space_id DataDatabricksApps#space_id}.

---

### DataDatabricksAppsAppResourcesJob <a name="DataDatabricksAppsAppResourcesJob" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksapps"

&datadatabricksapps.DataDatabricksAppsAppResourcesJob {
	Id: *string,
	Permission: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#id DataDatabricksApps#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob.property.permission">Permission</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#permission DataDatabricksApps#permission}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#id DataDatabricksApps#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob.property.permission"></a>

```go
Permission *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

### DataDatabricksAppsAppResourcesSecret <a name="DataDatabricksAppsAppResourcesSecret" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksapps"

&datadatabricksapps.DataDatabricksAppsAppResourcesSecret {
	Key: *string,
	Permission: *string,
	Scope: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#key DataDatabricksApps#key}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret.property.permission">Permission</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#permission DataDatabricksApps#permission}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret.property.scope">Scope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#scope DataDatabricksApps#scope}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#key DataDatabricksApps#key}.

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret.property.permission"></a>

```go
Permission *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#scope DataDatabricksApps#scope}.

---

### DataDatabricksAppsAppResourcesServingEndpoint <a name="DataDatabricksAppsAppResourcesServingEndpoint" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksapps"

&datadatabricksapps.DataDatabricksAppsAppResourcesServingEndpoint {
	Name: *string,
	Permission: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#name DataDatabricksApps#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint.property.permission">Permission</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#permission DataDatabricksApps#permission}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#name DataDatabricksApps#name}.

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint.property.permission"></a>

```go
Permission *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

### DataDatabricksAppsAppResourcesSqlWarehouse <a name="DataDatabricksAppsAppResourcesSqlWarehouse" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksapps"

&datadatabricksapps.DataDatabricksAppsAppResourcesSqlWarehouse {
	Id: *string,
	Permission: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#id DataDatabricksApps#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse.property.permission">Permission</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#permission DataDatabricksApps#permission}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#id DataDatabricksApps#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse.property.permission"></a>

```go
Permission *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

### DataDatabricksAppsAppResourcesUcSecurable <a name="DataDatabricksAppsAppResourcesUcSecurable" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksapps"

&datadatabricksapps.DataDatabricksAppsAppResourcesUcSecurable {
	Permission: *string,
	SecurableFullName: *string,
	SecurableType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable.property.permission">Permission</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#permission DataDatabricksApps#permission}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable.property.securableFullName">SecurableFullName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#securable_full_name DataDatabricksApps#securable_full_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable.property.securableType">SecurableType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#securable_type DataDatabricksApps#securable_type}. |

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable.property.permission"></a>

```go
Permission *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#permission DataDatabricksApps#permission}.

---

##### `SecurableFullName`<sup>Required</sup> <a name="SecurableFullName" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable.property.securableFullName"></a>

```go
SecurableFullName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#securable_full_name DataDatabricksApps#securable_full_name}.

---

##### `SecurableType`<sup>Required</sup> <a name="SecurableType" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable.property.securableType"></a>

```go
SecurableType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#securable_type DataDatabricksApps#securable_type}.

---

### DataDatabricksAppsConfig <a name="DataDatabricksAppsConfig" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksapps"

&datadatabricksapps.DataDatabricksAppsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ProviderConfig: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksApps.DataDatabricksAppsProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfig">DataDatabricksAppsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#provider_config DataDatabricksApps#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksAppsProviderConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfig">DataDatabricksAppsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#provider_config DataDatabricksApps#provider_config}.

---

### DataDatabricksAppsProviderConfig <a name="DataDatabricksAppsProviderConfig" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksapps"

&datadatabricksapps.DataDatabricksAppsProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#workspace_id DataDatabricksApps#workspace_id}. |

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/apps#workspace_id DataDatabricksApps#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference <a name="DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksapps"

datadatabricksapps.NewDataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.resetSourceCodePath">ResetSourceCodePath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSourceCodePath` <a name="ResetSourceCodePath" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.resetSourceCodePath"></a>

```go
func ResetSourceCodePath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.property.sourceCodePathInput">SourceCodePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.property.sourceCodePath">SourceCodePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts">DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceCodePathInput`<sup>Optional</sup> <a name="SourceCodePathInput" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.property.sourceCodePathInput"></a>

```go
func SourceCodePathInput() *string
```

- *Type:* *string

---

##### `SourceCodePath`<sup>Required</sup> <a name="SourceCodePath" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.property.sourceCodePath"></a>

```go
func SourceCodePath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts">DataDatabricksAppsAppActiveDeploymentDeploymentArtifacts</a>

---


### DataDatabricksAppsAppActiveDeploymentOutputReference <a name="DataDatabricksAppsAppActiveDeploymentOutputReference" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksapps"

datadatabricksapps.NewDataDatabricksAppsAppActiveDeploymentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAppsAppActiveDeploymentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resetDeploymentId">ResetDeploymentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resetSourceCodePath">ResetSourceCodePath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeploymentId` <a name="ResetDeploymentId" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resetDeploymentId"></a>

```go
func ResetDeploymentId()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resetMode"></a>

```go
func ResetMode()
```

##### `ResetSourceCodePath` <a name="ResetSourceCodePath" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.resetSourceCodePath"></a>

```go
func ResetSourceCodePath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.creator">Creator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.deploymentArtifacts">DeploymentArtifacts</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference">DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.status">Status</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference">DataDatabricksAppsAppActiveDeploymentStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.deploymentIdInput">DeploymentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.sourceCodePathInput">SourceCodePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.deploymentId">DeploymentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.sourceCodePath">SourceCodePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment">DataDatabricksAppsAppActiveDeployment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.creator"></a>

```go
func Creator() *string
```

- *Type:* *string

---

##### `DeploymentArtifacts`<sup>Required</sup> <a name="DeploymentArtifacts" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.deploymentArtifacts"></a>

```go
func DeploymentArtifacts() DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference">DataDatabricksAppsAppActiveDeploymentDeploymentArtifactsOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.status"></a>

```go
func Status() DataDatabricksAppsAppActiveDeploymentStatusOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference">DataDatabricksAppsAppActiveDeploymentStatusOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DeploymentIdInput`<sup>Optional</sup> <a name="DeploymentIdInput" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.deploymentIdInput"></a>

```go
func DeploymentIdInput() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `SourceCodePathInput`<sup>Optional</sup> <a name="SourceCodePathInput" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.sourceCodePathInput"></a>

```go
func SourceCodePathInput() *string
```

- *Type:* *string

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.deploymentId"></a>

```go
func DeploymentId() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `SourceCodePath`<sup>Required</sup> <a name="SourceCodePath" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.sourceCodePath"></a>

```go
func SourceCodePath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksAppsAppActiveDeployment
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeployment">DataDatabricksAppsAppActiveDeployment</a>

---


### DataDatabricksAppsAppActiveDeploymentStatusOutputReference <a name="DataDatabricksAppsAppActiveDeploymentStatusOutputReference" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksapps"

datadatabricksapps.NewDataDatabricksAppsAppActiveDeploymentStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAppsAppActiveDeploymentStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatus">DataDatabricksAppsAppActiveDeploymentStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksAppsAppActiveDeploymentStatus
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentStatus">DataDatabricksAppsAppActiveDeploymentStatus</a>

---


### DataDatabricksAppsAppAppStatusOutputReference <a name="DataDatabricksAppsAppAppStatusOutputReference" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksapps"

datadatabricksapps.NewDataDatabricksAppsAppAppStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAppsAppAppStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatus">DataDatabricksAppsAppAppStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksAppsAppAppStatus
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatus">DataDatabricksAppsAppAppStatus</a>

---


### DataDatabricksAppsAppComputeStatusOutputReference <a name="DataDatabricksAppsAppComputeStatusOutputReference" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksapps"

datadatabricksapps.NewDataDatabricksAppsAppComputeStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAppsAppComputeStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatus">DataDatabricksAppsAppComputeStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksAppsAppComputeStatus
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatus">DataDatabricksAppsAppComputeStatus</a>

---


### DataDatabricksAppsAppList <a name="DataDatabricksAppsAppList" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksapps"

datadatabricksapps.NewDataDatabricksAppsAppList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksAppsAppList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.get"></a>

```go
func Get(index *f64) DataDatabricksAppsAppOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAppsAppOutputReference <a name="DataDatabricksAppsAppOutputReference" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksapps"

datadatabricksapps.NewDataDatabricksAppsAppOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksAppsAppOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.putResources">PutResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetBudgetPolicyId">ResetBudgetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetComputeSize">ResetComputeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetResources">ResetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetUserApiScopes">ResetUserApiScopes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResources` <a name="PutResources" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.putResources"></a>

```go
func PutResources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.putResources.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBudgetPolicyId` <a name="ResetBudgetPolicyId" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetBudgetPolicyId"></a>

```go
func ResetBudgetPolicyId()
```

##### `ResetComputeSize` <a name="ResetComputeSize" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetComputeSize"></a>

```go
func ResetComputeSize()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetResources` <a name="ResetResources" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetResources"></a>

```go
func ResetResources()
```

##### `ResetUserApiScopes` <a name="ResetUserApiScopes" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.resetUserApiScopes"></a>

```go
func ResetUserApiScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.activeDeployment">ActiveDeployment</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference">DataDatabricksAppsAppActiveDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.appStatus">AppStatus</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference">DataDatabricksAppsAppAppStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.computeStatus">ComputeStatus</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference">DataDatabricksAppsAppComputeStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.creator">Creator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.defaultSourceCodePath">DefaultSourceCodePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.effectiveBudgetPolicyId">EffectiveBudgetPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.effectiveUserApiScopes">EffectiveUserApiScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.oauth2AppClientId">Oauth2AppClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.oauth2AppIntegrationId">Oauth2AppIntegrationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.pendingDeployment">PendingDeployment</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference">DataDatabricksAppsAppPendingDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList">DataDatabricksAppsAppResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.servicePrincipalClientId">ServicePrincipalClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.servicePrincipalName">ServicePrincipalName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.updater">Updater</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.budgetPolicyIdInput">BudgetPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.computeSizeInput">ComputeSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.userApiScopesInput">UserApiScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.budgetPolicyId">BudgetPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.computeSize">ComputeSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.userApiScopes">UserApiScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp">DataDatabricksAppsApp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActiveDeployment`<sup>Required</sup> <a name="ActiveDeployment" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.activeDeployment"></a>

```go
func ActiveDeployment() DataDatabricksAppsAppActiveDeploymentOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppActiveDeploymentOutputReference">DataDatabricksAppsAppActiveDeploymentOutputReference</a>

---

##### `AppStatus`<sup>Required</sup> <a name="AppStatus" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.appStatus"></a>

```go
func AppStatus() DataDatabricksAppsAppAppStatusOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppAppStatusOutputReference">DataDatabricksAppsAppAppStatusOutputReference</a>

---

##### `ComputeStatus`<sup>Required</sup> <a name="ComputeStatus" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.computeStatus"></a>

```go
func ComputeStatus() DataDatabricksAppsAppComputeStatusOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppComputeStatusOutputReference">DataDatabricksAppsAppComputeStatusOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.creator"></a>

```go
func Creator() *string
```

- *Type:* *string

---

##### `DefaultSourceCodePath`<sup>Required</sup> <a name="DefaultSourceCodePath" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.defaultSourceCodePath"></a>

```go
func DefaultSourceCodePath() *string
```

- *Type:* *string

---

##### `EffectiveBudgetPolicyId`<sup>Required</sup> <a name="EffectiveBudgetPolicyId" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.effectiveBudgetPolicyId"></a>

```go
func EffectiveBudgetPolicyId() *string
```

- *Type:* *string

---

##### `EffectiveUserApiScopes`<sup>Required</sup> <a name="EffectiveUserApiScopes" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.effectiveUserApiScopes"></a>

```go
func EffectiveUserApiScopes() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Oauth2AppClientId`<sup>Required</sup> <a name="Oauth2AppClientId" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.oauth2AppClientId"></a>

```go
func Oauth2AppClientId() *string
```

- *Type:* *string

---

##### `Oauth2AppIntegrationId`<sup>Required</sup> <a name="Oauth2AppIntegrationId" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.oauth2AppIntegrationId"></a>

```go
func Oauth2AppIntegrationId() *string
```

- *Type:* *string

---

##### `PendingDeployment`<sup>Required</sup> <a name="PendingDeployment" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.pendingDeployment"></a>

```go
func PendingDeployment() DataDatabricksAppsAppPendingDeploymentOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference">DataDatabricksAppsAppPendingDeploymentOutputReference</a>

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.resources"></a>

```go
func Resources() DataDatabricksAppsAppResourcesList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList">DataDatabricksAppsAppResourcesList</a>

---

##### `ServicePrincipalClientId`<sup>Required</sup> <a name="ServicePrincipalClientId" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.servicePrincipalClientId"></a>

```go
func ServicePrincipalClientId() *string
```

- *Type:* *string

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.servicePrincipalId"></a>

```go
func ServicePrincipalId() *f64
```

- *Type:* *f64

---

##### `ServicePrincipalName`<sup>Required</sup> <a name="ServicePrincipalName" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.servicePrincipalName"></a>

```go
func ServicePrincipalName() *string
```

- *Type:* *string

---

##### `Updater`<sup>Required</sup> <a name="Updater" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.updater"></a>

```go
func Updater() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `BudgetPolicyIdInput`<sup>Optional</sup> <a name="BudgetPolicyIdInput" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.budgetPolicyIdInput"></a>

```go
func BudgetPolicyIdInput() *string
```

- *Type:* *string

---

##### `ComputeSizeInput`<sup>Optional</sup> <a name="ComputeSizeInput" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.computeSizeInput"></a>

```go
func ComputeSizeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.resourcesInput"></a>

```go
func ResourcesInput() interface{}
```

- *Type:* interface{}

---

##### `UserApiScopesInput`<sup>Optional</sup> <a name="UserApiScopesInput" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.userApiScopesInput"></a>

```go
func UserApiScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `BudgetPolicyId`<sup>Required</sup> <a name="BudgetPolicyId" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.budgetPolicyId"></a>

```go
func BudgetPolicyId() *string
```

- *Type:* *string

---

##### `ComputeSize`<sup>Required</sup> <a name="ComputeSize" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.computeSize"></a>

```go
func ComputeSize() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `UserApiScopes`<sup>Required</sup> <a name="UserApiScopes" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.userApiScopes"></a>

```go
func UserApiScopes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksAppsApp
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsApp">DataDatabricksAppsApp</a>

---


### DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference <a name="DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksapps"

datadatabricksapps.NewDataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.resetSourceCodePath">ResetSourceCodePath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSourceCodePath` <a name="ResetSourceCodePath" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.resetSourceCodePath"></a>

```go
func ResetSourceCodePath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.property.sourceCodePathInput">SourceCodePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.property.sourceCodePath">SourceCodePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts">DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceCodePathInput`<sup>Optional</sup> <a name="SourceCodePathInput" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.property.sourceCodePathInput"></a>

```go
func SourceCodePathInput() *string
```

- *Type:* *string

---

##### `SourceCodePath`<sup>Required</sup> <a name="SourceCodePath" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.property.sourceCodePath"></a>

```go
func SourceCodePath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts">DataDatabricksAppsAppPendingDeploymentDeploymentArtifacts</a>

---


### DataDatabricksAppsAppPendingDeploymentOutputReference <a name="DataDatabricksAppsAppPendingDeploymentOutputReference" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksapps"

datadatabricksapps.NewDataDatabricksAppsAppPendingDeploymentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAppsAppPendingDeploymentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resetDeploymentId">ResetDeploymentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resetSourceCodePath">ResetSourceCodePath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeploymentId` <a name="ResetDeploymentId" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resetDeploymentId"></a>

```go
func ResetDeploymentId()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resetMode"></a>

```go
func ResetMode()
```

##### `ResetSourceCodePath` <a name="ResetSourceCodePath" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.resetSourceCodePath"></a>

```go
func ResetSourceCodePath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.creator">Creator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.deploymentArtifacts">DeploymentArtifacts</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference">DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.status">Status</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference">DataDatabricksAppsAppPendingDeploymentStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.deploymentIdInput">DeploymentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.sourceCodePathInput">SourceCodePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.deploymentId">DeploymentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.sourceCodePath">SourceCodePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment">DataDatabricksAppsAppPendingDeployment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.creator"></a>

```go
func Creator() *string
```

- *Type:* *string

---

##### `DeploymentArtifacts`<sup>Required</sup> <a name="DeploymentArtifacts" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.deploymentArtifacts"></a>

```go
func DeploymentArtifacts() DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference">DataDatabricksAppsAppPendingDeploymentDeploymentArtifactsOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.status"></a>

```go
func Status() DataDatabricksAppsAppPendingDeploymentStatusOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference">DataDatabricksAppsAppPendingDeploymentStatusOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DeploymentIdInput`<sup>Optional</sup> <a name="DeploymentIdInput" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.deploymentIdInput"></a>

```go
func DeploymentIdInput() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `SourceCodePathInput`<sup>Optional</sup> <a name="SourceCodePathInput" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.sourceCodePathInput"></a>

```go
func SourceCodePathInput() *string
```

- *Type:* *string

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.deploymentId"></a>

```go
func DeploymentId() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `SourceCodePath`<sup>Required</sup> <a name="SourceCodePath" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.sourceCodePath"></a>

```go
func SourceCodePath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksAppsAppPendingDeployment
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeployment">DataDatabricksAppsAppPendingDeployment</a>

---


### DataDatabricksAppsAppPendingDeploymentStatusOutputReference <a name="DataDatabricksAppsAppPendingDeploymentStatusOutputReference" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksapps"

datadatabricksapps.NewDataDatabricksAppsAppPendingDeploymentStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAppsAppPendingDeploymentStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatus">DataDatabricksAppsAppPendingDeploymentStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksAppsAppPendingDeploymentStatus
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppPendingDeploymentStatus">DataDatabricksAppsAppPendingDeploymentStatus</a>

---


### DataDatabricksAppsAppResourcesDatabaseOutputReference <a name="DataDatabricksAppsAppResourcesDatabaseOutputReference" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksapps"

datadatabricksapps.NewDataDatabricksAppsAppResourcesDatabaseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAppsAppResourcesDatabaseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.instanceNameInput">InstanceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.permissionInput">PermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.instanceName">InstanceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `InstanceNameInput`<sup>Optional</sup> <a name="InstanceNameInput" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.instanceNameInput"></a>

```go
func InstanceNameInput() *string
```

- *Type:* *string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.permissionInput"></a>

```go
func PermissionInput() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.instanceName"></a>

```go
func InstanceName() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAppsAppResourcesGenieSpaceOutputReference <a name="DataDatabricksAppsAppResourcesGenieSpaceOutputReference" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksapps"

datadatabricksapps.NewDataDatabricksAppsAppResourcesGenieSpaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAppsAppResourcesGenieSpaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.permissionInput">PermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.spaceIdInput">SpaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.spaceId">SpaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.permissionInput"></a>

```go
func PermissionInput() *string
```

- *Type:* *string

---

##### `SpaceIdInput`<sup>Optional</sup> <a name="SpaceIdInput" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.spaceIdInput"></a>

```go
func SpaceIdInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `SpaceId`<sup>Required</sup> <a name="SpaceId" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.spaceId"></a>

```go
func SpaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAppsAppResourcesJobOutputReference <a name="DataDatabricksAppsAppResourcesJobOutputReference" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksapps"

datadatabricksapps.NewDataDatabricksAppsAppResourcesJobOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAppsAppResourcesJobOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.permissionInput">PermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.permissionInput"></a>

```go
func PermissionInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAppsAppResourcesList <a name="DataDatabricksAppsAppResourcesList" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksapps"

datadatabricksapps.NewDataDatabricksAppsAppResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksAppsAppResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.get"></a>

```go
func Get(index *f64) DataDatabricksAppsAppResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAppsAppResourcesOutputReference <a name="DataDatabricksAppsAppResourcesOutputReference" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksapps"

datadatabricksapps.NewDataDatabricksAppsAppResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksAppsAppResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putDatabase">PutDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putGenieSpace">PutGenieSpace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putJob">PutJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putSecret">PutSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putServingEndpoint">PutServingEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putSqlWarehouse">PutSqlWarehouse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putUcSecurable">PutUcSecurable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetGenieSpace">ResetGenieSpace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetJob">ResetJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetSecret">ResetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetServingEndpoint">ResetServingEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetSqlWarehouse">ResetSqlWarehouse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetUcSecurable">ResetUcSecurable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatabase` <a name="PutDatabase" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putDatabase"></a>

```go
func PutDatabase(value DataDatabricksAppsAppResourcesDatabase)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabase">DataDatabricksAppsAppResourcesDatabase</a>

---

##### `PutGenieSpace` <a name="PutGenieSpace" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putGenieSpace"></a>

```go
func PutGenieSpace(value DataDatabricksAppsAppResourcesGenieSpace)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putGenieSpace.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpace">DataDatabricksAppsAppResourcesGenieSpace</a>

---

##### `PutJob` <a name="PutJob" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putJob"></a>

```go
func PutJob(value DataDatabricksAppsAppResourcesJob)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putJob.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJob">DataDatabricksAppsAppResourcesJob</a>

---

##### `PutSecret` <a name="PutSecret" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putSecret"></a>

```go
func PutSecret(value DataDatabricksAppsAppResourcesSecret)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putSecret.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecret">DataDatabricksAppsAppResourcesSecret</a>

---

##### `PutServingEndpoint` <a name="PutServingEndpoint" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putServingEndpoint"></a>

```go
func PutServingEndpoint(value DataDatabricksAppsAppResourcesServingEndpoint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putServingEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpoint">DataDatabricksAppsAppResourcesServingEndpoint</a>

---

##### `PutSqlWarehouse` <a name="PutSqlWarehouse" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putSqlWarehouse"></a>

```go
func PutSqlWarehouse(value DataDatabricksAppsAppResourcesSqlWarehouse)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putSqlWarehouse.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouse">DataDatabricksAppsAppResourcesSqlWarehouse</a>

---

##### `PutUcSecurable` <a name="PutUcSecurable" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putUcSecurable"></a>

```go
func PutUcSecurable(value DataDatabricksAppsAppResourcesUcSecurable)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.putUcSecurable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurable">DataDatabricksAppsAppResourcesUcSecurable</a>

---

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetDatabase"></a>

```go
func ResetDatabase()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetGenieSpace` <a name="ResetGenieSpace" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetGenieSpace"></a>

```go
func ResetGenieSpace()
```

##### `ResetJob` <a name="ResetJob" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetJob"></a>

```go
func ResetJob()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetSecret"></a>

```go
func ResetSecret()
```

##### `ResetServingEndpoint` <a name="ResetServingEndpoint" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetServingEndpoint"></a>

```go
func ResetServingEndpoint()
```

##### `ResetSqlWarehouse` <a name="ResetSqlWarehouse" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetSqlWarehouse"></a>

```go
func ResetSqlWarehouse()
```

##### `ResetUcSecurable` <a name="ResetUcSecurable" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.resetUcSecurable"></a>

```go
func ResetUcSecurable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.database">Database</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference">DataDatabricksAppsAppResourcesDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.genieSpace">GenieSpace</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference">DataDatabricksAppsAppResourcesGenieSpaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.job">Job</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference">DataDatabricksAppsAppResourcesJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.secret">Secret</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference">DataDatabricksAppsAppResourcesSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.servingEndpoint">ServingEndpoint</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference">DataDatabricksAppsAppResourcesServingEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.sqlWarehouse">SqlWarehouse</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference">DataDatabricksAppsAppResourcesSqlWarehouseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.ucSecurable">UcSecurable</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference">DataDatabricksAppsAppResourcesUcSecurableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.genieSpaceInput">GenieSpaceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.jobInput">JobInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.secretInput">SecretInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.servingEndpointInput">ServingEndpointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.sqlWarehouseInput">SqlWarehouseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.ucSecurableInput">UcSecurableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.database"></a>

```go
func Database() DataDatabricksAppsAppResourcesDatabaseOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesDatabaseOutputReference">DataDatabricksAppsAppResourcesDatabaseOutputReference</a>

---

##### `GenieSpace`<sup>Required</sup> <a name="GenieSpace" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.genieSpace"></a>

```go
func GenieSpace() DataDatabricksAppsAppResourcesGenieSpaceOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesGenieSpaceOutputReference">DataDatabricksAppsAppResourcesGenieSpaceOutputReference</a>

---

##### `Job`<sup>Required</sup> <a name="Job" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.job"></a>

```go
func Job() DataDatabricksAppsAppResourcesJobOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesJobOutputReference">DataDatabricksAppsAppResourcesJobOutputReference</a>

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.secret"></a>

```go
func Secret() DataDatabricksAppsAppResourcesSecretOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference">DataDatabricksAppsAppResourcesSecretOutputReference</a>

---

##### `ServingEndpoint`<sup>Required</sup> <a name="ServingEndpoint" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.servingEndpoint"></a>

```go
func ServingEndpoint() DataDatabricksAppsAppResourcesServingEndpointOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference">DataDatabricksAppsAppResourcesServingEndpointOutputReference</a>

---

##### `SqlWarehouse`<sup>Required</sup> <a name="SqlWarehouse" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.sqlWarehouse"></a>

```go
func SqlWarehouse() DataDatabricksAppsAppResourcesSqlWarehouseOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference">DataDatabricksAppsAppResourcesSqlWarehouseOutputReference</a>

---

##### `UcSecurable`<sup>Required</sup> <a name="UcSecurable" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.ucSecurable"></a>

```go
func UcSecurable() DataDatabricksAppsAppResourcesUcSecurableOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference">DataDatabricksAppsAppResourcesUcSecurableOutputReference</a>

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.databaseInput"></a>

```go
func DatabaseInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `GenieSpaceInput`<sup>Optional</sup> <a name="GenieSpaceInput" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.genieSpaceInput"></a>

```go
func GenieSpaceInput() interface{}
```

- *Type:* interface{}

---

##### `JobInput`<sup>Optional</sup> <a name="JobInput" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.jobInput"></a>

```go
func JobInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.secretInput"></a>

```go
func SecretInput() interface{}
```

- *Type:* interface{}

---

##### `ServingEndpointInput`<sup>Optional</sup> <a name="ServingEndpointInput" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.servingEndpointInput"></a>

```go
func ServingEndpointInput() interface{}
```

- *Type:* interface{}

---

##### `SqlWarehouseInput`<sup>Optional</sup> <a name="SqlWarehouseInput" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.sqlWarehouseInput"></a>

```go
func SqlWarehouseInput() interface{}
```

- *Type:* interface{}

---

##### `UcSecurableInput`<sup>Optional</sup> <a name="UcSecurableInput" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.ucSecurableInput"></a>

```go
func UcSecurableInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAppsAppResourcesSecretOutputReference <a name="DataDatabricksAppsAppResourcesSecretOutputReference" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksapps"

datadatabricksapps.NewDataDatabricksAppsAppResourcesSecretOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAppsAppResourcesSecretOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.permissionInput">PermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.permissionInput"></a>

```go
func PermissionInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSecretOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAppsAppResourcesServingEndpointOutputReference <a name="DataDatabricksAppsAppResourcesServingEndpointOutputReference" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksapps"

datadatabricksapps.NewDataDatabricksAppsAppResourcesServingEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAppsAppResourcesServingEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.permissionInput">PermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.permissionInput"></a>

```go
func PermissionInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesServingEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAppsAppResourcesSqlWarehouseOutputReference <a name="DataDatabricksAppsAppResourcesSqlWarehouseOutputReference" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksapps"

datadatabricksapps.NewDataDatabricksAppsAppResourcesSqlWarehouseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAppsAppResourcesSqlWarehouseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.permissionInput">PermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.permissionInput"></a>

```go
func PermissionInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesSqlWarehouseOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAppsAppResourcesUcSecurableOutputReference <a name="DataDatabricksAppsAppResourcesUcSecurableOutputReference" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksapps"

datadatabricksapps.NewDataDatabricksAppsAppResourcesUcSecurableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAppsAppResourcesUcSecurableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.permissionInput">PermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.securableFullNameInput">SecurableFullNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.securableTypeInput">SecurableTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.securableFullName">SecurableFullName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.securableType">SecurableType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.permissionInput"></a>

```go
func PermissionInput() *string
```

- *Type:* *string

---

##### `SecurableFullNameInput`<sup>Optional</sup> <a name="SecurableFullNameInput" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.securableFullNameInput"></a>

```go
func SecurableFullNameInput() *string
```

- *Type:* *string

---

##### `SecurableTypeInput`<sup>Optional</sup> <a name="SecurableTypeInput" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.securableTypeInput"></a>

```go
func SecurableTypeInput() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `SecurableFullName`<sup>Required</sup> <a name="SecurableFullName" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.securableFullName"></a>

```go
func SecurableFullName() *string
```

- *Type:* *string

---

##### `SecurableType`<sup>Required</sup> <a name="SecurableType" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.securableType"></a>

```go
func SecurableType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsAppResourcesUcSecurableOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAppsProviderConfigOutputReference <a name="DataDatabricksAppsProviderConfigOutputReference" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksapps"

datadatabricksapps.NewDataDatabricksAppsProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAppsProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksApps.DataDatabricksAppsProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



