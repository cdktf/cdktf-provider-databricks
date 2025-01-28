# `dataDatabricksSharePluginframework` Submodule <a name="`dataDatabricksSharePluginframework` Submodule" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksSharePluginframework <a name="DataDatabricksSharePluginframework" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework databricks_share_pluginframework}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickssharepluginframework"

datadatabrickssharepluginframework.NewDataDatabricksSharePluginframework(scope Construct, id *string, config DataDatabricksSharePluginframeworkConfig) DataDatabricksSharePluginframework
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig">DataDatabricksSharePluginframeworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig">DataDatabricksSharePluginframeworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.putObject">PutObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetObject">ResetObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetStorageLocation">ResetStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetStorageRoot">ResetStorageRoot</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutObject` <a name="PutObject" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.putObject"></a>

```go
func PutObject(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.putObject.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetComment"></a>

```go
func ResetComment()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetName"></a>

```go
func ResetName()
```

##### `ResetObject` <a name="ResetObject" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetObject"></a>

```go
func ResetObject()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetOwner"></a>

```go
func ResetOwner()
```

##### `ResetStorageLocation` <a name="ResetStorageLocation" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetStorageLocation"></a>

```go
func ResetStorageLocation()
```

##### `ResetStorageRoot` <a name="ResetStorageRoot" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetStorageRoot"></a>

```go
func ResetStorageRoot()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksSharePluginframework resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickssharepluginframework"

datadatabrickssharepluginframework.DataDatabricksSharePluginframework_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickssharepluginframework"

datadatabrickssharepluginframework.DataDatabricksSharePluginframework_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickssharepluginframework"

datadatabrickssharepluginframework.DataDatabricksSharePluginframework_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickssharepluginframework"

datadatabrickssharepluginframework.DataDatabricksSharePluginframework_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatabricksSharePluginframework resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksSharePluginframework to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksSharePluginframework that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksSharePluginframework to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.createdAt">CreatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.effectiveOwner">EffectiveOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.object">Object</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList">DataDatabricksSharePluginframeworkObjectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.updatedAt">UpdatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.updatedBy">UpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.objectInput">ObjectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.ownerInput">OwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.storageLocationInput">StorageLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.storageRootInput">StorageRootInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.storageLocation">StorageLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.storageRoot">StorageRoot</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.createdAt"></a>

```go
func CreatedAt() *f64
```

- *Type:* *f64

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `EffectiveOwner`<sup>Required</sup> <a name="EffectiveOwner" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.effectiveOwner"></a>

```go
func EffectiveOwner() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.object"></a>

```go
func Object() DataDatabricksSharePluginframeworkObjectList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList">DataDatabricksSharePluginframeworkObjectList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.updatedAt"></a>

```go
func UpdatedAt() *f64
```

- *Type:* *f64

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.updatedBy"></a>

```go
func UpdatedBy() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.objectInput"></a>

```go
func ObjectInput() interface{}
```

- *Type:* interface{}

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.ownerInput"></a>

```go
func OwnerInput() *string
```

- *Type:* *string

---

##### `StorageLocationInput`<sup>Optional</sup> <a name="StorageLocationInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.storageLocationInput"></a>

```go
func StorageLocationInput() *string
```

- *Type:* *string

---

##### `StorageRootInput`<sup>Optional</sup> <a name="StorageRootInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.storageRootInput"></a>

```go
func StorageRootInput() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `StorageLocation`<sup>Required</sup> <a name="StorageLocation" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.storageLocation"></a>

```go
func StorageLocation() *string
```

- *Type:* *string

---

##### `StorageRoot`<sup>Required</sup> <a name="StorageRoot" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.storageRoot"></a>

```go
func StorageRoot() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksSharePluginframeworkConfig <a name="DataDatabricksSharePluginframeworkConfig" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickssharepluginframework"

&datadatabrickssharepluginframework.DataDatabricksSharePluginframeworkConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Comment: *string,
	Name: *string,
	Object: interface{},
	Owner: *string,
	StorageLocation: *string,
	StorageRoot: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#comment DataDatabricksSharePluginframework#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#name DataDatabricksSharePluginframework#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.object">Object</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#object DataDatabricksSharePluginframework#object}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.owner">Owner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#owner DataDatabricksSharePluginframework#owner}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.storageLocation">StorageLocation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#storage_location DataDatabricksSharePluginframework#storage_location}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.storageRoot">StorageRoot</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#storage_root DataDatabricksSharePluginframework#storage_root}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#comment DataDatabricksSharePluginframework#comment}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#name DataDatabricksSharePluginframework#name}.

---

##### `Object`<sup>Optional</sup> <a name="Object" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.object"></a>

```go
Object interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#object DataDatabricksSharePluginframework#object}.

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.owner"></a>

```go
Owner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#owner DataDatabricksSharePluginframework#owner}.

---

##### `StorageLocation`<sup>Optional</sup> <a name="StorageLocation" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.storageLocation"></a>

```go
StorageLocation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#storage_location DataDatabricksSharePluginframework#storage_location}.

---

##### `StorageRoot`<sup>Optional</sup> <a name="StorageRoot" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.storageRoot"></a>

```go
StorageRoot *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#storage_root DataDatabricksSharePluginframework#storage_root}.

---

### DataDatabricksSharePluginframeworkObject <a name="DataDatabricksSharePluginframeworkObject" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickssharepluginframework"

&datadatabrickssharepluginframework.DataDatabricksSharePluginframeworkObject {
	Name: *string,
	CdfEnabled: interface{},
	Comment: *string,
	Content: *string,
	DataObjectType: *string,
	HistoryDataSharingStatus: *string,
	Partition: interface{},
	SharedAs: *string,
	StartVersion: *f64,
	StringSharedAs: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#name DataDatabricksSharePluginframework#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.cdfEnabled">CdfEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#cdf_enabled DataDatabricksSharePluginframework#cdf_enabled}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#comment DataDatabricksSharePluginframework#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.content">Content</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#content DataDatabricksSharePluginframework#content}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.dataObjectType">DataObjectType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#data_object_type DataDatabricksSharePluginframework#data_object_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.historyDataSharingStatus">HistoryDataSharingStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#history_data_sharing_status DataDatabricksSharePluginframework#history_data_sharing_status}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.partition">Partition</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#partition DataDatabricksSharePluginframework#partition}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.sharedAs">SharedAs</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#shared_as DataDatabricksSharePluginframework#shared_as}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.startVersion">StartVersion</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#start_version DataDatabricksSharePluginframework#start_version}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.stringSharedAs">StringSharedAs</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#string_shared_as DataDatabricksSharePluginframework#string_shared_as}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#name DataDatabricksSharePluginframework#name}.

---

##### `CdfEnabled`<sup>Optional</sup> <a name="CdfEnabled" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.cdfEnabled"></a>

```go
CdfEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#cdf_enabled DataDatabricksSharePluginframework#cdf_enabled}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#comment DataDatabricksSharePluginframework#comment}.

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.content"></a>

```go
Content *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#content DataDatabricksSharePluginframework#content}.

---

##### `DataObjectType`<sup>Optional</sup> <a name="DataObjectType" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.dataObjectType"></a>

```go
DataObjectType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#data_object_type DataDatabricksSharePluginframework#data_object_type}.

---

##### `HistoryDataSharingStatus`<sup>Optional</sup> <a name="HistoryDataSharingStatus" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.historyDataSharingStatus"></a>

```go
HistoryDataSharingStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#history_data_sharing_status DataDatabricksSharePluginframework#history_data_sharing_status}.

---

##### `Partition`<sup>Optional</sup> <a name="Partition" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.partition"></a>

```go
Partition interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#partition DataDatabricksSharePluginframework#partition}.

---

##### `SharedAs`<sup>Optional</sup> <a name="SharedAs" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.sharedAs"></a>

```go
SharedAs *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#shared_as DataDatabricksSharePluginframework#shared_as}.

---

##### `StartVersion`<sup>Optional</sup> <a name="StartVersion" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.startVersion"></a>

```go
StartVersion *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#start_version DataDatabricksSharePluginframework#start_version}.

---

##### `StringSharedAs`<sup>Optional</sup> <a name="StringSharedAs" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.stringSharedAs"></a>

```go
StringSharedAs *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#string_shared_as DataDatabricksSharePluginframework#string_shared_as}.

---

### DataDatabricksSharePluginframeworkObjectPartition <a name="DataDatabricksSharePluginframeworkObjectPartition" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickssharepluginframework"

&datadatabrickssharepluginframework.DataDatabricksSharePluginframeworkObjectPartition {
	Value: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartition.property.value">Value</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#value DataDatabricksSharePluginframework#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartition.property.value"></a>

```go
Value interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#value DataDatabricksSharePluginframework#value}.

---

### DataDatabricksSharePluginframeworkObjectPartitionValue <a name="DataDatabricksSharePluginframeworkObjectPartitionValue" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickssharepluginframework"

&datadatabrickssharepluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue {
	Name: *string,
	Op: *string,
	RecipientPropertyKey: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#name DataDatabricksSharePluginframework#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue.property.op">Op</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#op DataDatabricksSharePluginframework#op}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue.property.recipientPropertyKey">RecipientPropertyKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#recipient_property_key DataDatabricksSharePluginframework#recipient_property_key}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#value DataDatabricksSharePluginframework#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#name DataDatabricksSharePluginframework#name}.

---

##### `Op`<sup>Optional</sup> <a name="Op" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue.property.op"></a>

```go
Op *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#op DataDatabricksSharePluginframework#op}.

---

##### `RecipientPropertyKey`<sup>Optional</sup> <a name="RecipientPropertyKey" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue.property.recipientPropertyKey"></a>

```go
RecipientPropertyKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#recipient_property_key DataDatabricksSharePluginframework#recipient_property_key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/share_pluginframework#value DataDatabricksSharePluginframework#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksSharePluginframeworkObjectList <a name="DataDatabricksSharePluginframeworkObjectList" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickssharepluginframework"

datadatabrickssharepluginframework.NewDataDatabricksSharePluginframeworkObjectList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksSharePluginframeworkObjectList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.get"></a>

```go
func Get(index *f64) DataDatabricksSharePluginframeworkObjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksSharePluginframeworkObjectOutputReference <a name="DataDatabricksSharePluginframeworkObjectOutputReference" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickssharepluginframework"

datadatabrickssharepluginframework.NewDataDatabricksSharePluginframeworkObjectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksSharePluginframeworkObjectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.putPartition">PutPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetCdfEnabled">ResetCdfEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetDataObjectType">ResetDataObjectType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetHistoryDataSharingStatus">ResetHistoryDataSharingStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetPartition">ResetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetSharedAs">ResetSharedAs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetStartVersion">ResetStartVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetStringSharedAs">ResetStringSharedAs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPartition` <a name="PutPartition" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.putPartition"></a>

```go
func PutPartition(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.putPartition.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCdfEnabled` <a name="ResetCdfEnabled" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetCdfEnabled"></a>

```go
func ResetCdfEnabled()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetComment"></a>

```go
func ResetComment()
```

##### `ResetContent` <a name="ResetContent" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetContent"></a>

```go
func ResetContent()
```

##### `ResetDataObjectType` <a name="ResetDataObjectType" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetDataObjectType"></a>

```go
func ResetDataObjectType()
```

##### `ResetHistoryDataSharingStatus` <a name="ResetHistoryDataSharingStatus" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetHistoryDataSharingStatus"></a>

```go
func ResetHistoryDataSharingStatus()
```

##### `ResetPartition` <a name="ResetPartition" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetPartition"></a>

```go
func ResetPartition()
```

##### `ResetSharedAs` <a name="ResetSharedAs" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetSharedAs"></a>

```go
func ResetSharedAs()
```

##### `ResetStartVersion` <a name="ResetStartVersion" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetStartVersion"></a>

```go
func ResetStartVersion()
```

##### `ResetStringSharedAs` <a name="ResetStringSharedAs" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetStringSharedAs"></a>

```go
func ResetStringSharedAs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.addedAt">AddedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.addedBy">AddedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.effectiveCdfEnabled">EffectiveCdfEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.effectiveHistoryDataSharingStatus">EffectiveHistoryDataSharingStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.effectiveSharedAs">EffectiveSharedAs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.effectiveStartVersion">EffectiveStartVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.partition">Partition</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList">DataDatabricksSharePluginframeworkObjectPartitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.cdfEnabledInput">CdfEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.dataObjectTypeInput">DataObjectTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.historyDataSharingStatusInput">HistoryDataSharingStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.partitionInput">PartitionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.sharedAsInput">SharedAsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.startVersionInput">StartVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.stringSharedAsInput">StringSharedAsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.cdfEnabled">CdfEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.dataObjectType">DataObjectType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.historyDataSharingStatus">HistoryDataSharingStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.sharedAs">SharedAs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.startVersion">StartVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.stringSharedAs">StringSharedAs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddedAt`<sup>Required</sup> <a name="AddedAt" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.addedAt"></a>

```go
func AddedAt() *f64
```

- *Type:* *f64

---

##### `AddedBy`<sup>Required</sup> <a name="AddedBy" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.addedBy"></a>

```go
func AddedBy() *string
```

- *Type:* *string

---

##### `EffectiveCdfEnabled`<sup>Required</sup> <a name="EffectiveCdfEnabled" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.effectiveCdfEnabled"></a>

```go
func EffectiveCdfEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EffectiveHistoryDataSharingStatus`<sup>Required</sup> <a name="EffectiveHistoryDataSharingStatus" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.effectiveHistoryDataSharingStatus"></a>

```go
func EffectiveHistoryDataSharingStatus() *string
```

- *Type:* *string

---

##### `EffectiveSharedAs`<sup>Required</sup> <a name="EffectiveSharedAs" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.effectiveSharedAs"></a>

```go
func EffectiveSharedAs() *string
```

- *Type:* *string

---

##### `EffectiveStartVersion`<sup>Required</sup> <a name="EffectiveStartVersion" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.effectiveStartVersion"></a>

```go
func EffectiveStartVersion() *f64
```

- *Type:* *f64

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.partition"></a>

```go
func Partition() DataDatabricksSharePluginframeworkObjectPartitionList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList">DataDatabricksSharePluginframeworkObjectPartitionList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `CdfEnabledInput`<sup>Optional</sup> <a name="CdfEnabledInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.cdfEnabledInput"></a>

```go
func CdfEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `DataObjectTypeInput`<sup>Optional</sup> <a name="DataObjectTypeInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.dataObjectTypeInput"></a>

```go
func DataObjectTypeInput() *string
```

- *Type:* *string

---

##### `HistoryDataSharingStatusInput`<sup>Optional</sup> <a name="HistoryDataSharingStatusInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.historyDataSharingStatusInput"></a>

```go
func HistoryDataSharingStatusInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PartitionInput`<sup>Optional</sup> <a name="PartitionInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.partitionInput"></a>

```go
func PartitionInput() interface{}
```

- *Type:* interface{}

---

##### `SharedAsInput`<sup>Optional</sup> <a name="SharedAsInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.sharedAsInput"></a>

```go
func SharedAsInput() *string
```

- *Type:* *string

---

##### `StartVersionInput`<sup>Optional</sup> <a name="StartVersionInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.startVersionInput"></a>

```go
func StartVersionInput() *f64
```

- *Type:* *f64

---

##### `StringSharedAsInput`<sup>Optional</sup> <a name="StringSharedAsInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.stringSharedAsInput"></a>

```go
func StringSharedAsInput() *string
```

- *Type:* *string

---

##### `CdfEnabled`<sup>Required</sup> <a name="CdfEnabled" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.cdfEnabled"></a>

```go
func CdfEnabled() interface{}
```

- *Type:* interface{}

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `DataObjectType`<sup>Required</sup> <a name="DataObjectType" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.dataObjectType"></a>

```go
func DataObjectType() *string
```

- *Type:* *string

---

##### `HistoryDataSharingStatus`<sup>Required</sup> <a name="HistoryDataSharingStatus" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.historyDataSharingStatus"></a>

```go
func HistoryDataSharingStatus() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SharedAs`<sup>Required</sup> <a name="SharedAs" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.sharedAs"></a>

```go
func SharedAs() *string
```

- *Type:* *string

---

##### `StartVersion`<sup>Required</sup> <a name="StartVersion" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.startVersion"></a>

```go
func StartVersion() *f64
```

- *Type:* *f64

---

##### `StringSharedAs`<sup>Required</sup> <a name="StringSharedAs" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.stringSharedAs"></a>

```go
func StringSharedAs() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksSharePluginframeworkObjectPartitionList <a name="DataDatabricksSharePluginframeworkObjectPartitionList" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickssharepluginframework"

datadatabrickssharepluginframework.NewDataDatabricksSharePluginframeworkObjectPartitionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksSharePluginframeworkObjectPartitionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.get"></a>

```go
func Get(index *f64) DataDatabricksSharePluginframeworkObjectPartitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksSharePluginframeworkObjectPartitionOutputReference <a name="DataDatabricksSharePluginframeworkObjectPartitionOutputReference" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickssharepluginframework"

datadatabrickssharepluginframework.NewDataDatabricksSharePluginframeworkObjectPartitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksSharePluginframeworkObjectPartitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValue` <a name="PutValue" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.putValue"></a>

```go
func PutValue(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.putValue.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.property.value">Value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList">DataDatabricksSharePluginframeworkObjectPartitionValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.property.valueInput">ValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.property.value"></a>

```go
func Value() DataDatabricksSharePluginframeworkObjectPartitionValueList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList">DataDatabricksSharePluginframeworkObjectPartitionValueList</a>

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.property.valueInput"></a>

```go
func ValueInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksSharePluginframeworkObjectPartitionValueList <a name="DataDatabricksSharePluginframeworkObjectPartitionValueList" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickssharepluginframework"

datadatabrickssharepluginframework.NewDataDatabricksSharePluginframeworkObjectPartitionValueList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksSharePluginframeworkObjectPartitionValueList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.get"></a>

```go
func Get(index *f64) DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference <a name="DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickssharepluginframework"

datadatabrickssharepluginframework.NewDataDatabricksSharePluginframeworkObjectPartitionValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.resetOp">ResetOp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.resetRecipientPropertyKey">ResetRecipientPropertyKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetOp` <a name="ResetOp" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.resetOp"></a>

```go
func ResetOp()
```

##### `ResetRecipientPropertyKey` <a name="ResetRecipientPropertyKey" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.resetRecipientPropertyKey"></a>

```go
func ResetRecipientPropertyKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.opInput">OpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.recipientPropertyKeyInput">RecipientPropertyKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.op">Op</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.recipientPropertyKey">RecipientPropertyKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OpInput`<sup>Optional</sup> <a name="OpInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.opInput"></a>

```go
func OpInput() *string
```

- *Type:* *string

---

##### `RecipientPropertyKeyInput`<sup>Optional</sup> <a name="RecipientPropertyKeyInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.recipientPropertyKeyInput"></a>

```go
func RecipientPropertyKeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Op`<sup>Required</sup> <a name="Op" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.op"></a>

```go
func Op() *string
```

- *Type:* *string

---

##### `RecipientPropertyKey`<sup>Required</sup> <a name="RecipientPropertyKey" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.recipientPropertyKey"></a>

```go
func RecipientPropertyKey() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



