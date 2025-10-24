# `dataDatabricksDatabaseSyncedDatabaseTables` Submodule <a name="`dataDatabricksDatabaseSyncedDatabaseTables` Submodule" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDatabaseSyncedDatabaseTables <a name="DataDatabricksDatabaseSyncedDatabaseTables" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/database_synced_database_tables databricks_database_synced_database_tables}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetables"

datadatabricksdatabasesynceddatabasetables.NewDataDatabricksDatabaseSyncedDatabaseTables(scope Construct, id *string, config DataDatabricksDatabaseSyncedDatabaseTablesConfig) DataDatabricksDatabaseSyncedDatabaseTables
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesConfig">DataDatabricksDatabaseSyncedDatabaseTablesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesConfig">DataDatabricksDatabaseSyncedDatabaseTablesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.resetPageSize">ResetPageSize</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.resetPageSize"></a>

```go
func ResetPageSize()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksDatabaseSyncedDatabaseTables resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetables"

datadatabricksdatabasesynceddatabasetables.DataDatabricksDatabaseSyncedDatabaseTables_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetables"

datadatabricksdatabasesynceddatabasetables.DataDatabricksDatabaseSyncedDatabaseTables_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetables"

datadatabricksdatabasesynceddatabasetables.DataDatabricksDatabaseSyncedDatabaseTables_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetables"

datadatabricksdatabasesynceddatabasetables.DataDatabricksDatabaseSyncedDatabaseTables_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatabricksDatabaseSyncedDatabaseTables resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksDatabaseSyncedDatabaseTables to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksDatabaseSyncedDatabaseTables that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/database_synced_database_tables#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksDatabaseSyncedDatabaseTables to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.syncedTables">SyncedTables</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.instanceNameInput">InstanceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.pageSizeInput">PageSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.instanceName">InstanceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.pageSize">PageSize</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `SyncedTables`<sup>Required</sup> <a name="SyncedTables" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.syncedTables"></a>

```go
func SyncedTables() DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList</a>

---

##### `InstanceNameInput`<sup>Optional</sup> <a name="InstanceNameInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.instanceNameInput"></a>

```go
func InstanceNameInput() *string
```

- *Type:* *string

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.pageSizeInput"></a>

```go
func PageSizeInput() *f64
```

- *Type:* *f64

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.instanceName"></a>

```go
func InstanceName() *string
```

- *Type:* *string

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.pageSize"></a>

```go
func PageSize() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDatabaseSyncedDatabaseTablesConfig <a name="DataDatabricksDatabaseSyncedDatabaseTablesConfig" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetables"

&datadatabricksdatabasesynceddatabasetables.DataDatabricksDatabaseSyncedDatabaseTablesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	InstanceName: *string,
	PageSize: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesConfig.property.instanceName">InstanceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/database_synced_database_tables#instance_name DataDatabricksDatabaseSyncedDatabaseTables#instance_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesConfig.property.pageSize">PageSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/database_synced_database_tables#page_size DataDatabricksDatabaseSyncedDatabaseTables#page_size}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesConfig.property.instanceName"></a>

```go
InstanceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/database_synced_database_tables#instance_name DataDatabricksDatabaseSyncedDatabaseTables#instance_name}.

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesConfig.property.pageSize"></a>

```go
PageSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/database_synced_database_tables#page_size DataDatabricksDatabaseSyncedDatabaseTables#page_size}.

---

### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTables <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTables" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTables.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetables"

&datadatabricksdatabasesynceddatabasetables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTables {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTables.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/database_synced_database_tables#name DataDatabricksDatabaseSyncedDatabaseTables#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTables.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/database_synced_database_tables#name DataDatabricksDatabaseSyncedDatabaseTables#name}.

---

### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatus <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetables"

&datadatabricksdatabasesynceddatabasetables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatus {
	ContinuousUpdateStatus: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatus,
	FailedStatus: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatus,
	ProvisioningStatus: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatus,
	TriggeredUpdateStatus: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatus,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatus.property.continuousUpdateStatus">ContinuousUpdateStatus</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatus">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatus</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/database_synced_database_tables#continuous_update_status DataDatabricksDatabaseSyncedDatabaseTables#continuous_update_status}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatus.property.failedStatus">FailedStatus</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatus">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatus</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/database_synced_database_tables#failed_status DataDatabricksDatabaseSyncedDatabaseTables#failed_status}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatus.property.provisioningStatus">ProvisioningStatus</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatus">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatus</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/database_synced_database_tables#provisioning_status DataDatabricksDatabaseSyncedDatabaseTables#provisioning_status}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatus.property.triggeredUpdateStatus">TriggeredUpdateStatus</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatus">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatus</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/database_synced_database_tables#triggered_update_status DataDatabricksDatabaseSyncedDatabaseTables#triggered_update_status}. |

---

##### `ContinuousUpdateStatus`<sup>Optional</sup> <a name="ContinuousUpdateStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatus.property.continuousUpdateStatus"></a>

```go
ContinuousUpdateStatus DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatus
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatus">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatus</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/database_synced_database_tables#continuous_update_status DataDatabricksDatabaseSyncedDatabaseTables#continuous_update_status}.

---

##### `FailedStatus`<sup>Optional</sup> <a name="FailedStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatus.property.failedStatus"></a>

```go
FailedStatus DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatus
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatus">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatus</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/database_synced_database_tables#failed_status DataDatabricksDatabaseSyncedDatabaseTables#failed_status}.

---

##### `ProvisioningStatus`<sup>Optional</sup> <a name="ProvisioningStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatus.property.provisioningStatus"></a>

```go
ProvisioningStatus DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatus
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatus">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatus</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/database_synced_database_tables#provisioning_status DataDatabricksDatabaseSyncedDatabaseTables#provisioning_status}.

---

##### `TriggeredUpdateStatus`<sup>Optional</sup> <a name="TriggeredUpdateStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatus.property.triggeredUpdateStatus"></a>

```go
TriggeredUpdateStatus DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatus
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatus">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatus</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/database_synced_database_tables#triggered_update_status DataDatabricksDatabaseSyncedDatabaseTables#triggered_update_status}.

---

### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatus <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetables"

&datadatabricksdatabasesynceddatabasetables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatus {

}
```


### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetables"

&datadatabricksdatabasesynceddatabasetables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress {

}
```


### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatus <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetables"

&datadatabricksdatabasesynceddatabasetables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatus {

}
```


### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSync <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSync" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSync"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSync.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetables"

&datadatabricksdatabasesynceddatabasetables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSync {

}
```


### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfo <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfo" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetables"

&datadatabricksdatabasesynceddatabasetables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfo {

}
```


### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatus <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetables"

&datadatabricksdatabasesynceddatabasetables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatus {

}
```


### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetables"

&datadatabricksdatabasesynceddatabasetables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress {

}
```


### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatus <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetables"

&datadatabricksdatabasesynceddatabasetables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatus {

}
```


### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetables"

&datadatabricksdatabasesynceddatabasetables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress {

}
```


### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetables"

&datadatabricksdatabasesynceddatabasetables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec {
	CreateDatabaseObjectsIfMissing: interface{},
	ExistingPipelineId: *string,
	NewPipelineSpec: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec,
	PrimaryKeyColumns: *[]*string,
	SchedulingPolicy: *string,
	SourceTableFullName: *string,
	TimeseriesKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec.property.createDatabaseObjectsIfMissing">CreateDatabaseObjectsIfMissing</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/database_synced_database_tables#create_database_objects_if_missing DataDatabricksDatabaseSyncedDatabaseTables#create_database_objects_if_missing}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec.property.existingPipelineId">ExistingPipelineId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/database_synced_database_tables#existing_pipeline_id DataDatabricksDatabaseSyncedDatabaseTables#existing_pipeline_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec.property.newPipelineSpec">NewPipelineSpec</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/database_synced_database_tables#new_pipeline_spec DataDatabricksDatabaseSyncedDatabaseTables#new_pipeline_spec}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec.property.primaryKeyColumns">PrimaryKeyColumns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/database_synced_database_tables#primary_key_columns DataDatabricksDatabaseSyncedDatabaseTables#primary_key_columns}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec.property.schedulingPolicy">SchedulingPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/database_synced_database_tables#scheduling_policy DataDatabricksDatabaseSyncedDatabaseTables#scheduling_policy}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec.property.sourceTableFullName">SourceTableFullName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/database_synced_database_tables#source_table_full_name DataDatabricksDatabaseSyncedDatabaseTables#source_table_full_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec.property.timeseriesKey">TimeseriesKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/database_synced_database_tables#timeseries_key DataDatabricksDatabaseSyncedDatabaseTables#timeseries_key}. |

---

##### `CreateDatabaseObjectsIfMissing`<sup>Optional</sup> <a name="CreateDatabaseObjectsIfMissing" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec.property.createDatabaseObjectsIfMissing"></a>

```go
CreateDatabaseObjectsIfMissing interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/database_synced_database_tables#create_database_objects_if_missing DataDatabricksDatabaseSyncedDatabaseTables#create_database_objects_if_missing}.

---

##### `ExistingPipelineId`<sup>Optional</sup> <a name="ExistingPipelineId" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec.property.existingPipelineId"></a>

```go
ExistingPipelineId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/database_synced_database_tables#existing_pipeline_id DataDatabricksDatabaseSyncedDatabaseTables#existing_pipeline_id}.

---

##### `NewPipelineSpec`<sup>Optional</sup> <a name="NewPipelineSpec" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec.property.newPipelineSpec"></a>

```go
NewPipelineSpec DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/database_synced_database_tables#new_pipeline_spec DataDatabricksDatabaseSyncedDatabaseTables#new_pipeline_spec}.

---

##### `PrimaryKeyColumns`<sup>Optional</sup> <a name="PrimaryKeyColumns" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec.property.primaryKeyColumns"></a>

```go
PrimaryKeyColumns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/database_synced_database_tables#primary_key_columns DataDatabricksDatabaseSyncedDatabaseTables#primary_key_columns}.

---

##### `SchedulingPolicy`<sup>Optional</sup> <a name="SchedulingPolicy" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec.property.schedulingPolicy"></a>

```go
SchedulingPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/database_synced_database_tables#scheduling_policy DataDatabricksDatabaseSyncedDatabaseTables#scheduling_policy}.

---

##### `SourceTableFullName`<sup>Optional</sup> <a name="SourceTableFullName" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec.property.sourceTableFullName"></a>

```go
SourceTableFullName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/database_synced_database_tables#source_table_full_name DataDatabricksDatabaseSyncedDatabaseTables#source_table_full_name}.

---

##### `TimeseriesKey`<sup>Optional</sup> <a name="TimeseriesKey" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec.property.timeseriesKey"></a>

```go
TimeseriesKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/database_synced_database_tables#timeseries_key DataDatabricksDatabaseSyncedDatabaseTables#timeseries_key}.

---

### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetables"

&datadatabricksdatabasesynceddatabasetables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec {
	StorageCatalog: *string,
	StorageSchema: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec.property.storageCatalog">StorageCatalog</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/database_synced_database_tables#storage_catalog DataDatabricksDatabaseSyncedDatabaseTables#storage_catalog}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec.property.storageSchema">StorageSchema</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/database_synced_database_tables#storage_schema DataDatabricksDatabaseSyncedDatabaseTables#storage_schema}. |

---

##### `StorageCatalog`<sup>Optional</sup> <a name="StorageCatalog" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec.property.storageCatalog"></a>

```go
StorageCatalog *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/database_synced_database_tables#storage_catalog DataDatabricksDatabaseSyncedDatabaseTables#storage_catalog}.

---

##### `StorageSchema`<sup>Optional</sup> <a name="StorageSchema" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec.property.storageSchema"></a>

```go
StorageSchema *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/database_synced_database_tables#storage_schema DataDatabricksDatabaseSyncedDatabaseTables#storage_schema}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetables"

datadatabricksdatabasesynceddatabasetables.NewDataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds">EstimatedCompletionTimeSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing">LatestVersionCurrentlyProcessing</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.provisioningPhase">ProvisioningPhase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount">SyncedRowCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion">SyncProgressCompletion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount">TotalRowCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EstimatedCompletionTimeSeconds`<sup>Required</sup> <a name="EstimatedCompletionTimeSeconds" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds"></a>

```go
func EstimatedCompletionTimeSeconds() *f64
```

- *Type:* *f64

---

##### `LatestVersionCurrentlyProcessing`<sup>Required</sup> <a name="LatestVersionCurrentlyProcessing" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing"></a>

```go
func LatestVersionCurrentlyProcessing() *f64
```

- *Type:* *f64

---

##### `ProvisioningPhase`<sup>Required</sup> <a name="ProvisioningPhase" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.provisioningPhase"></a>

```go
func ProvisioningPhase() *string
```

- *Type:* *string

---

##### `SyncedRowCount`<sup>Required</sup> <a name="SyncedRowCount" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount"></a>

```go
func SyncedRowCount() *f64
```

- *Type:* *f64

---

##### `SyncProgressCompletion`<sup>Required</sup> <a name="SyncProgressCompletion" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion"></a>

```go
func SyncProgressCompletion() *f64
```

- *Type:* *f64

---

##### `TotalRowCount`<sup>Required</sup> <a name="TotalRowCount" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount"></a>

```go
func TotalRowCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress</a>

---


### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetables"

datadatabricksdatabasesynceddatabasetables.NewDataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.initialPipelineSyncProgress">InitialPipelineSyncProgress</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.lastProcessedCommitVersion">LastProcessedCommitVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.timestamp">Timestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InitialPipelineSyncProgress`<sup>Required</sup> <a name="InitialPipelineSyncProgress" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.initialPipelineSyncProgress"></a>

```go
func InitialPipelineSyncProgress() DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference</a>

---

##### `LastProcessedCommitVersion`<sup>Required</sup> <a name="LastProcessedCommitVersion" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.lastProcessedCommitVersion"></a>

```go
func LastProcessedCommitVersion() *f64
```

- *Type:* *f64

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.timestamp"></a>

```go
func Timestamp() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetables"

datadatabricksdatabasesynceddatabasetables.NewDataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.property.lastProcessedCommitVersion">LastProcessedCommitVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.property.timestamp">Timestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastProcessedCommitVersion`<sup>Required</sup> <a name="LastProcessedCommitVersion" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.property.lastProcessedCommitVersion"></a>

```go
func LastProcessedCommitVersion() *f64
```

- *Type:* *f64

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.property.timestamp"></a>

```go
func Timestamp() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetables"

datadatabricksdatabasesynceddatabasetables.NewDataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitTimestamp">DeltaCommitTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitVersion">DeltaCommitVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfo">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeltaCommitTimestamp`<sup>Required</sup> <a name="DeltaCommitTimestamp" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitTimestamp"></a>

```go
func DeltaCommitTimestamp() *string
```

- *Type:* *string

---

##### `DeltaCommitVersion`<sup>Required</sup> <a name="DeltaCommitVersion" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitVersion"></a>

```go
func DeltaCommitVersion() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfo">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfo</a>

---


### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetables"

datadatabricksdatabasesynceddatabasetables.NewDataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.property.deltaTableSyncInfo">DeltaTableSyncInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.property.syncEndTimestamp">SyncEndTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.property.syncStartTimestamp">SyncStartTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSync">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSync</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeltaTableSyncInfo`<sup>Required</sup> <a name="DeltaTableSyncInfo" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.property.deltaTableSyncInfo"></a>

```go
func DeltaTableSyncInfo() DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference</a>

---

##### `SyncEndTimestamp`<sup>Required</sup> <a name="SyncEndTimestamp" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.property.syncEndTimestamp"></a>

```go
func SyncEndTimestamp() *string
```

- *Type:* *string

---

##### `SyncStartTimestamp`<sup>Required</sup> <a name="SyncStartTimestamp" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.property.syncStartTimestamp"></a>

```go
func SyncStartTimestamp() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSync
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSync">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSync</a>

---


### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetables"

datadatabricksdatabasesynceddatabasetables.NewDataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.putContinuousUpdateStatus">PutContinuousUpdateStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.putFailedStatus">PutFailedStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.putProvisioningStatus">PutProvisioningStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.putTriggeredUpdateStatus">PutTriggeredUpdateStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.resetContinuousUpdateStatus">ResetContinuousUpdateStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.resetFailedStatus">ResetFailedStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.resetProvisioningStatus">ResetProvisioningStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.resetTriggeredUpdateStatus">ResetTriggeredUpdateStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContinuousUpdateStatus` <a name="PutContinuousUpdateStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.putContinuousUpdateStatus"></a>

```go
func PutContinuousUpdateStatus(value DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatus)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.putContinuousUpdateStatus.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatus">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatus</a>

---

##### `PutFailedStatus` <a name="PutFailedStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.putFailedStatus"></a>

```go
func PutFailedStatus(value DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatus)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.putFailedStatus.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatus">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatus</a>

---

##### `PutProvisioningStatus` <a name="PutProvisioningStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.putProvisioningStatus"></a>

```go
func PutProvisioningStatus(value DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatus)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.putProvisioningStatus.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatus">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatus</a>

---

##### `PutTriggeredUpdateStatus` <a name="PutTriggeredUpdateStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.putTriggeredUpdateStatus"></a>

```go
func PutTriggeredUpdateStatus(value DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatus)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.putTriggeredUpdateStatus.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatus">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatus</a>

---

##### `ResetContinuousUpdateStatus` <a name="ResetContinuousUpdateStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.resetContinuousUpdateStatus"></a>

```go
func ResetContinuousUpdateStatus()
```

##### `ResetFailedStatus` <a name="ResetFailedStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.resetFailedStatus"></a>

```go
func ResetFailedStatus()
```

##### `ResetProvisioningStatus` <a name="ResetProvisioningStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.resetProvisioningStatus"></a>

```go
func ResetProvisioningStatus()
```

##### `ResetTriggeredUpdateStatus` <a name="ResetTriggeredUpdateStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.resetTriggeredUpdateStatus"></a>

```go
func ResetTriggeredUpdateStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.continuousUpdateStatus">ContinuousUpdateStatus</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.detailedState">DetailedState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.failedStatus">FailedStatus</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.lastSync">LastSync</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.pipelineId">PipelineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.provisioningStatus">ProvisioningStatus</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.triggeredUpdateStatus">TriggeredUpdateStatus</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.continuousUpdateStatusInput">ContinuousUpdateStatusInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.failedStatusInput">FailedStatusInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.provisioningStatusInput">ProvisioningStatusInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.triggeredUpdateStatusInput">TriggeredUpdateStatusInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatus">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContinuousUpdateStatus`<sup>Required</sup> <a name="ContinuousUpdateStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.continuousUpdateStatus"></a>

```go
func ContinuousUpdateStatus() DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference</a>

---

##### `DetailedState`<sup>Required</sup> <a name="DetailedState" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.detailedState"></a>

```go
func DetailedState() *string
```

- *Type:* *string

---

##### `FailedStatus`<sup>Required</sup> <a name="FailedStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.failedStatus"></a>

```go
func FailedStatus() DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference</a>

---

##### `LastSync`<sup>Required</sup> <a name="LastSync" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.lastSync"></a>

```go
func LastSync() DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference</a>

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.pipelineId"></a>

```go
func PipelineId() *string
```

- *Type:* *string

---

##### `ProvisioningStatus`<sup>Required</sup> <a name="ProvisioningStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.provisioningStatus"></a>

```go
func ProvisioningStatus() DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference</a>

---

##### `TriggeredUpdateStatus`<sup>Required</sup> <a name="TriggeredUpdateStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.triggeredUpdateStatus"></a>

```go
func TriggeredUpdateStatus() DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference</a>

---

##### `ContinuousUpdateStatusInput`<sup>Optional</sup> <a name="ContinuousUpdateStatusInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.continuousUpdateStatusInput"></a>

```go
func ContinuousUpdateStatusInput() interface{}
```

- *Type:* interface{}

---

##### `FailedStatusInput`<sup>Optional</sup> <a name="FailedStatusInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.failedStatusInput"></a>

```go
func FailedStatusInput() interface{}
```

- *Type:* interface{}

---

##### `ProvisioningStatusInput`<sup>Optional</sup> <a name="ProvisioningStatusInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.provisioningStatusInput"></a>

```go
func ProvisioningStatusInput() interface{}
```

- *Type:* interface{}

---

##### `TriggeredUpdateStatusInput`<sup>Optional</sup> <a name="TriggeredUpdateStatusInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.triggeredUpdateStatusInput"></a>

```go
func TriggeredUpdateStatusInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatus
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatus">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatus</a>

---


### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetables"

datadatabricksdatabasesynceddatabasetables.NewDataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds">EstimatedCompletionTimeSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing">LatestVersionCurrentlyProcessing</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.provisioningPhase">ProvisioningPhase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount">SyncedRowCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion">SyncProgressCompletion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount">TotalRowCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EstimatedCompletionTimeSeconds`<sup>Required</sup> <a name="EstimatedCompletionTimeSeconds" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds"></a>

```go
func EstimatedCompletionTimeSeconds() *f64
```

- *Type:* *f64

---

##### `LatestVersionCurrentlyProcessing`<sup>Required</sup> <a name="LatestVersionCurrentlyProcessing" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing"></a>

```go
func LatestVersionCurrentlyProcessing() *f64
```

- *Type:* *f64

---

##### `ProvisioningPhase`<sup>Required</sup> <a name="ProvisioningPhase" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.provisioningPhase"></a>

```go
func ProvisioningPhase() *string
```

- *Type:* *string

---

##### `SyncedRowCount`<sup>Required</sup> <a name="SyncedRowCount" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount"></a>

```go
func SyncedRowCount() *f64
```

- *Type:* *f64

---

##### `SyncProgressCompletion`<sup>Required</sup> <a name="SyncProgressCompletion" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion"></a>

```go
func SyncProgressCompletion() *f64
```

- *Type:* *f64

---

##### `TotalRowCount`<sup>Required</sup> <a name="TotalRowCount" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount"></a>

```go
func TotalRowCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress</a>

---


### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetables"

datadatabricksdatabasesynceddatabasetables.NewDataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.property.initialPipelineSyncProgress">InitialPipelineSyncProgress</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InitialPipelineSyncProgress`<sup>Required</sup> <a name="InitialPipelineSyncProgress" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.property.initialPipelineSyncProgress"></a>

```go
func InitialPipelineSyncProgress() DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetables"

datadatabricksdatabasesynceddatabasetables.NewDataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.lastProcessedCommitVersion">LastProcessedCommitVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.timestamp">Timestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.triggeredUpdateProgress">TriggeredUpdateProgress</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastProcessedCommitVersion`<sup>Required</sup> <a name="LastProcessedCommitVersion" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.lastProcessedCommitVersion"></a>

```go
func LastProcessedCommitVersion() *f64
```

- *Type:* *f64

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.timestamp"></a>

```go
func Timestamp() *string
```

- *Type:* *string

---

##### `TriggeredUpdateProgress`<sup>Required</sup> <a name="TriggeredUpdateProgress" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.triggeredUpdateProgress"></a>

```go
func TriggeredUpdateProgress() DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetables"

datadatabricksdatabasesynceddatabasetables.NewDataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.estimatedCompletionTimeSeconds">EstimatedCompletionTimeSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.latestVersionCurrentlyProcessing">LatestVersionCurrentlyProcessing</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.provisioningPhase">ProvisioningPhase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncedRowCount">SyncedRowCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncProgressCompletion">SyncProgressCompletion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.totalRowCount">TotalRowCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EstimatedCompletionTimeSeconds`<sup>Required</sup> <a name="EstimatedCompletionTimeSeconds" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.estimatedCompletionTimeSeconds"></a>

```go
func EstimatedCompletionTimeSeconds() *f64
```

- *Type:* *f64

---

##### `LatestVersionCurrentlyProcessing`<sup>Required</sup> <a name="LatestVersionCurrentlyProcessing" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.latestVersionCurrentlyProcessing"></a>

```go
func LatestVersionCurrentlyProcessing() *f64
```

- *Type:* *f64

---

##### `ProvisioningPhase`<sup>Required</sup> <a name="ProvisioningPhase" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.provisioningPhase"></a>

```go
func ProvisioningPhase() *string
```

- *Type:* *string

---

##### `SyncedRowCount`<sup>Required</sup> <a name="SyncedRowCount" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncedRowCount"></a>

```go
func SyncedRowCount() *f64
```

- *Type:* *f64

---

##### `SyncProgressCompletion`<sup>Required</sup> <a name="SyncProgressCompletion" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncProgressCompletion"></a>

```go
func SyncProgressCompletion() *f64
```

- *Type:* *f64

---

##### `TotalRowCount`<sup>Required</sup> <a name="TotalRowCount" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.totalRowCount"></a>

```go
func TotalRowCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress</a>

---


### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetables"

datadatabricksdatabasesynceddatabasetables.NewDataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.get"></a>

```go
func Get(index *f64) DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetables"

datadatabricksdatabasesynceddatabasetables.NewDataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.databaseInstanceName">DatabaseInstanceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.dataSynchronizationStatus">DataSynchronizationStatus</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.effectiveDatabaseInstanceName">EffectiveDatabaseInstanceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.effectiveLogicalDatabaseName">EffectiveLogicalDatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.logicalDatabaseName">LogicalDatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.unityCatalogProvisioningState">UnityCatalogProvisioningState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTables">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatabaseInstanceName`<sup>Required</sup> <a name="DatabaseInstanceName" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.databaseInstanceName"></a>

```go
func DatabaseInstanceName() *string
```

- *Type:* *string

---

##### `DataSynchronizationStatus`<sup>Required</sup> <a name="DataSynchronizationStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.dataSynchronizationStatus"></a>

```go
func DataSynchronizationStatus() DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference</a>

---

##### `EffectiveDatabaseInstanceName`<sup>Required</sup> <a name="EffectiveDatabaseInstanceName" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.effectiveDatabaseInstanceName"></a>

```go
func EffectiveDatabaseInstanceName() *string
```

- *Type:* *string

---

##### `EffectiveLogicalDatabaseName`<sup>Required</sup> <a name="EffectiveLogicalDatabaseName" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.effectiveLogicalDatabaseName"></a>

```go
func EffectiveLogicalDatabaseName() *string
```

- *Type:* *string

---

##### `LogicalDatabaseName`<sup>Required</sup> <a name="LogicalDatabaseName" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.logicalDatabaseName"></a>

```go
func LogicalDatabaseName() *string
```

- *Type:* *string

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.spec"></a>

```go
func Spec() DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference</a>

---

##### `UnityCatalogProvisioningState`<sup>Required</sup> <a name="UnityCatalogProvisioningState" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.unityCatalogProvisioningState"></a>

```go
func UnityCatalogProvisioningState() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksDatabaseSyncedDatabaseTablesSyncedTables
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTables">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTables</a>

---


### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetables"

datadatabricksdatabasesynceddatabasetables.NewDataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.resetStorageCatalog">ResetStorageCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.resetStorageSchema">ResetStorageSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStorageCatalog` <a name="ResetStorageCatalog" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.resetStorageCatalog"></a>

```go
func ResetStorageCatalog()
```

##### `ResetStorageSchema` <a name="ResetStorageSchema" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.resetStorageSchema"></a>

```go
func ResetStorageSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.property.storageCatalogInput">StorageCatalogInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.property.storageSchemaInput">StorageSchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.property.storageCatalog">StorageCatalog</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.property.storageSchema">StorageSchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StorageCatalogInput`<sup>Optional</sup> <a name="StorageCatalogInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.property.storageCatalogInput"></a>

```go
func StorageCatalogInput() *string
```

- *Type:* *string

---

##### `StorageSchemaInput`<sup>Optional</sup> <a name="StorageSchemaInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.property.storageSchemaInput"></a>

```go
func StorageSchemaInput() *string
```

- *Type:* *string

---

##### `StorageCatalog`<sup>Required</sup> <a name="StorageCatalog" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.property.storageCatalog"></a>

```go
func StorageCatalog() *string
```

- *Type:* *string

---

##### `StorageSchema`<sup>Required</sup> <a name="StorageSchema" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.property.storageSchema"></a>

```go
func StorageSchema() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetables"

datadatabricksdatabasesynceddatabasetables.NewDataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.putNewPipelineSpec">PutNewPipelineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.resetCreateDatabaseObjectsIfMissing">ResetCreateDatabaseObjectsIfMissing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.resetExistingPipelineId">ResetExistingPipelineId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.resetNewPipelineSpec">ResetNewPipelineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.resetPrimaryKeyColumns">ResetPrimaryKeyColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.resetSchedulingPolicy">ResetSchedulingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.resetSourceTableFullName">ResetSourceTableFullName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.resetTimeseriesKey">ResetTimeseriesKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNewPipelineSpec` <a name="PutNewPipelineSpec" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.putNewPipelineSpec"></a>

```go
func PutNewPipelineSpec(value DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.putNewPipelineSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec</a>

---

##### `ResetCreateDatabaseObjectsIfMissing` <a name="ResetCreateDatabaseObjectsIfMissing" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.resetCreateDatabaseObjectsIfMissing"></a>

```go
func ResetCreateDatabaseObjectsIfMissing()
```

##### `ResetExistingPipelineId` <a name="ResetExistingPipelineId" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.resetExistingPipelineId"></a>

```go
func ResetExistingPipelineId()
```

##### `ResetNewPipelineSpec` <a name="ResetNewPipelineSpec" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.resetNewPipelineSpec"></a>

```go
func ResetNewPipelineSpec()
```

##### `ResetPrimaryKeyColumns` <a name="ResetPrimaryKeyColumns" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.resetPrimaryKeyColumns"></a>

```go
func ResetPrimaryKeyColumns()
```

##### `ResetSchedulingPolicy` <a name="ResetSchedulingPolicy" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.resetSchedulingPolicy"></a>

```go
func ResetSchedulingPolicy()
```

##### `ResetSourceTableFullName` <a name="ResetSourceTableFullName" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.resetSourceTableFullName"></a>

```go
func ResetSourceTableFullName()
```

##### `ResetTimeseriesKey` <a name="ResetTimeseriesKey" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.resetTimeseriesKey"></a>

```go
func ResetTimeseriesKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.newPipelineSpec">NewPipelineSpec</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.createDatabaseObjectsIfMissingInput">CreateDatabaseObjectsIfMissingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.existingPipelineIdInput">ExistingPipelineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.newPipelineSpecInput">NewPipelineSpecInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.primaryKeyColumnsInput">PrimaryKeyColumnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.schedulingPolicyInput">SchedulingPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.sourceTableFullNameInput">SourceTableFullNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.timeseriesKeyInput">TimeseriesKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.createDatabaseObjectsIfMissing">CreateDatabaseObjectsIfMissing</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.existingPipelineId">ExistingPipelineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.primaryKeyColumns">PrimaryKeyColumns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.schedulingPolicy">SchedulingPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.sourceTableFullName">SourceTableFullName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.timeseriesKey">TimeseriesKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NewPipelineSpec`<sup>Required</sup> <a name="NewPipelineSpec" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.newPipelineSpec"></a>

```go
func NewPipelineSpec() DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference</a>

---

##### `CreateDatabaseObjectsIfMissingInput`<sup>Optional</sup> <a name="CreateDatabaseObjectsIfMissingInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.createDatabaseObjectsIfMissingInput"></a>

```go
func CreateDatabaseObjectsIfMissingInput() interface{}
```

- *Type:* interface{}

---

##### `ExistingPipelineIdInput`<sup>Optional</sup> <a name="ExistingPipelineIdInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.existingPipelineIdInput"></a>

```go
func ExistingPipelineIdInput() *string
```

- *Type:* *string

---

##### `NewPipelineSpecInput`<sup>Optional</sup> <a name="NewPipelineSpecInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.newPipelineSpecInput"></a>

```go
func NewPipelineSpecInput() interface{}
```

- *Type:* interface{}

---

##### `PrimaryKeyColumnsInput`<sup>Optional</sup> <a name="PrimaryKeyColumnsInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.primaryKeyColumnsInput"></a>

```go
func PrimaryKeyColumnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SchedulingPolicyInput`<sup>Optional</sup> <a name="SchedulingPolicyInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.schedulingPolicyInput"></a>

```go
func SchedulingPolicyInput() *string
```

- *Type:* *string

---

##### `SourceTableFullNameInput`<sup>Optional</sup> <a name="SourceTableFullNameInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.sourceTableFullNameInput"></a>

```go
func SourceTableFullNameInput() *string
```

- *Type:* *string

---

##### `TimeseriesKeyInput`<sup>Optional</sup> <a name="TimeseriesKeyInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.timeseriesKeyInput"></a>

```go
func TimeseriesKeyInput() *string
```

- *Type:* *string

---

##### `CreateDatabaseObjectsIfMissing`<sup>Required</sup> <a name="CreateDatabaseObjectsIfMissing" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.createDatabaseObjectsIfMissing"></a>

```go
func CreateDatabaseObjectsIfMissing() interface{}
```

- *Type:* interface{}

---

##### `ExistingPipelineId`<sup>Required</sup> <a name="ExistingPipelineId" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.existingPipelineId"></a>

```go
func ExistingPipelineId() *string
```

- *Type:* *string

---

##### `PrimaryKeyColumns`<sup>Required</sup> <a name="PrimaryKeyColumns" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.primaryKeyColumns"></a>

```go
func PrimaryKeyColumns() *[]*string
```

- *Type:* *[]*string

---

##### `SchedulingPolicy`<sup>Required</sup> <a name="SchedulingPolicy" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.schedulingPolicy"></a>

```go
func SchedulingPolicy() *string
```

- *Type:* *string

---

##### `SourceTableFullName`<sup>Required</sup> <a name="SourceTableFullName" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.sourceTableFullName"></a>

```go
func SourceTableFullName() *string
```

- *Type:* *string

---

##### `TimeseriesKey`<sup>Required</sup> <a name="TimeseriesKey" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.timeseriesKey"></a>

```go
func TimeseriesKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec</a>

---



