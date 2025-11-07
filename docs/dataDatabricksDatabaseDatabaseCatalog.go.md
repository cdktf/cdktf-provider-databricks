# `dataDatabricksDatabaseDatabaseCatalog` Submodule <a name="`dataDatabricksDatabaseDatabaseCatalog` Submodule" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDatabaseDatabaseCatalog <a name="DataDatabricksDatabaseDatabaseCatalog" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_database_catalog databricks_database_database_catalog}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasedatabasecatalog"

datadatabricksdatabasedatabasecatalog.NewDataDatabricksDatabaseDatabaseCatalog(scope Construct, id *string, config DataDatabricksDatabaseDatabaseCatalogConfig) DataDatabricksDatabaseDatabaseCatalog
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig">DataDatabricksDatabaseDatabaseCatalogConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig">DataDatabricksDatabaseDatabaseCatalogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksDatabaseDatabaseCatalog resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasedatabasecatalog"

datadatabricksdatabasedatabasecatalog.DataDatabricksDatabaseDatabaseCatalog_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasedatabasecatalog"

datadatabricksdatabasedatabasecatalog.DataDatabricksDatabaseDatabaseCatalog_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasedatabasecatalog"

datadatabricksdatabasedatabasecatalog.DataDatabricksDatabaseDatabaseCatalog_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasedatabasecatalog"

datadatabricksdatabasedatabasecatalog.DataDatabricksDatabaseDatabaseCatalog_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatabricksDatabaseDatabaseCatalog resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksDatabaseDatabaseCatalog to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksDatabaseDatabaseCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_database_catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksDatabaseDatabaseCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.createDatabaseIfNotExists">CreateDatabaseIfNotExists</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.databaseInstanceName">DatabaseInstanceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CreateDatabaseIfNotExists`<sup>Required</sup> <a name="CreateDatabaseIfNotExists" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.createDatabaseIfNotExists"></a>

```go
func CreateDatabaseIfNotExists() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DatabaseInstanceName`<sup>Required</sup> <a name="DatabaseInstanceName" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.databaseInstanceName"></a>

```go
func DatabaseInstanceName() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDatabaseDatabaseCatalogConfig <a name="DataDatabricksDatabaseDatabaseCatalogConfig" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasedatabasecatalog"

&datadatabricksdatabasedatabasecatalog.DataDatabricksDatabaseDatabaseCatalogConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_database_catalog#name DataDatabricksDatabaseDatabaseCatalog#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_database_catalog#name DataDatabricksDatabaseDatabaseCatalog#name}.

---



