# `dataDatabricksDbfsFilePaths` Submodule <a name="`dataDatabricksDbfsFilePaths` Submodule" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDbfsFilePaths <a name="DataDatabricksDbfsFilePaths" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/dbfs_file_paths databricks_dbfs_file_paths}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdbfsfilepaths"

datadatabricksdbfsfilepaths.NewDataDatabricksDbfsFilePaths(scope Construct, id *string, config DataDatabricksDbfsFilePathsConfig) DataDatabricksDbfsFilePaths
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig">DataDatabricksDbfsFilePathsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig">DataDatabricksDbfsFilePathsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksDbfsFilePaths resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdbfsfilepaths"

datadatabricksdbfsfilepaths.DataDatabricksDbfsFilePaths_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdbfsfilepaths"

datadatabricksdbfsfilepaths.DataDatabricksDbfsFilePaths_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdbfsfilepaths"

datadatabricksdbfsfilepaths.DataDatabricksDbfsFilePaths_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdbfsfilepaths"

datadatabricksdbfsfilepaths.DataDatabricksDbfsFilePaths_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatabricksDbfsFilePaths resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksDbfsFilePaths to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksDbfsFilePaths that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/dbfs_file_paths#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksDbfsFilePaths to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.pathList">PathList</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList">DataDatabricksDbfsFilePathsPathListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.recursiveInput">RecursiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.recursive">Recursive</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `PathList`<sup>Required</sup> <a name="PathList" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.pathList"></a>

```go
func PathList() DataDatabricksDbfsFilePathsPathListStructList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList">DataDatabricksDbfsFilePathsPathListStructList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `RecursiveInput`<sup>Optional</sup> <a name="RecursiveInput" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.recursiveInput"></a>

```go
func RecursiveInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Recursive`<sup>Required</sup> <a name="Recursive" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.recursive"></a>

```go
func Recursive() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDbfsFilePathsConfig <a name="DataDatabricksDbfsFilePathsConfig" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdbfsfilepaths"

&datadatabricksdbfsfilepaths.DataDatabricksDbfsFilePathsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Path: *string,
	Recursive: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/dbfs_file_paths#path DataDatabricksDbfsFilePaths#path}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.recursive">Recursive</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/dbfs_file_paths#recursive DataDatabricksDbfsFilePaths#recursive}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/dbfs_file_paths#id DataDatabricksDbfsFilePaths#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/dbfs_file_paths#path DataDatabricksDbfsFilePaths#path}.

---

##### `Recursive`<sup>Required</sup> <a name="Recursive" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.recursive"></a>

```go
Recursive interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/dbfs_file_paths#recursive DataDatabricksDbfsFilePaths#recursive}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/dbfs_file_paths#id DataDatabricksDbfsFilePaths#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataDatabricksDbfsFilePathsPathListStruct <a name="DataDatabricksDbfsFilePathsPathListStruct" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStruct.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdbfsfilepaths"

&datadatabricksdbfsfilepaths.DataDatabricksDbfsFilePathsPathListStruct {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksDbfsFilePathsPathListStructList <a name="DataDatabricksDbfsFilePathsPathListStructList" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdbfsfilepaths"

datadatabricksdbfsfilepaths.NewDataDatabricksDbfsFilePathsPathListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksDbfsFilePathsPathListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.get"></a>

```go
func Get(index *f64) DataDatabricksDbfsFilePathsPathListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataDatabricksDbfsFilePathsPathListStructOutputReference <a name="DataDatabricksDbfsFilePathsPathListStructOutputReference" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdbfsfilepaths"

datadatabricksdbfsfilepaths.NewDataDatabricksDbfsFilePathsPathListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksDbfsFilePathsPathListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.property.fileSize">FileSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStruct">DataDatabricksDbfsFilePathsPathListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FileSize`<sup>Required</sup> <a name="FileSize" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.property.fileSize"></a>

```go
func FileSize() *f64
```

- *Type:* *f64

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksDbfsFilePathsPathListStruct
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStruct">DataDatabricksDbfsFilePathsPathListStruct</a>

---



