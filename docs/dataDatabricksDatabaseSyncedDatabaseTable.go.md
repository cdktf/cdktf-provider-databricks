# `dataDatabricksDatabaseSyncedDatabaseTable` Submodule <a name="`dataDatabricksDatabaseSyncedDatabaseTable` Submodule" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDatabaseSyncedDatabaseTable <a name="DataDatabricksDatabaseSyncedDatabaseTable" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/database_synced_database_table databricks_database_synced_database_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetable"

datadatabricksdatabasesynceddatabasetable.NewDataDatabricksDatabaseSyncedDatabaseTable(scope Construct, id *string, config DataDatabricksDatabaseSyncedDatabaseTableConfig) DataDatabricksDatabaseSyncedDatabaseTable
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig">DataDatabricksDatabaseSyncedDatabaseTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig">DataDatabricksDatabaseSyncedDatabaseTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.resetDatabaseInstanceName">ResetDatabaseInstanceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.resetLogicalDatabaseName">ResetLogicalDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.resetSpec">ResetSpec</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutSpec` <a name="PutSpec" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.putSpec"></a>

```go
func PutSpec(value DataDatabricksDatabaseSyncedDatabaseTableSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec">DataDatabricksDatabaseSyncedDatabaseTableSpec</a>

---

##### `ResetDatabaseInstanceName` <a name="ResetDatabaseInstanceName" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.resetDatabaseInstanceName"></a>

```go
func ResetDatabaseInstanceName()
```

##### `ResetLogicalDatabaseName` <a name="ResetLogicalDatabaseName" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.resetLogicalDatabaseName"></a>

```go
func ResetLogicalDatabaseName()
```

##### `ResetSpec` <a name="ResetSpec" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.resetSpec"></a>

```go
func ResetSpec()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksDatabaseSyncedDatabaseTable resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetable"

datadatabricksdatabasesynceddatabasetable.DataDatabricksDatabaseSyncedDatabaseTable_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetable"

datadatabricksdatabasesynceddatabasetable.DataDatabricksDatabaseSyncedDatabaseTable_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetable"

datadatabricksdatabasesynceddatabasetable.DataDatabricksDatabaseSyncedDatabaseTable_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetable"

datadatabricksdatabasesynceddatabasetable.DataDatabricksDatabaseSyncedDatabaseTable_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatabricksDatabaseSyncedDatabaseTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksDatabaseSyncedDatabaseTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksDatabaseSyncedDatabaseTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/database_synced_database_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksDatabaseSyncedDatabaseTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.dataSynchronizationStatus">DataSynchronizationStatus</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.effectiveDatabaseInstanceName">EffectiveDatabaseInstanceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.effectiveLogicalDatabaseName">EffectiveLogicalDatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference">DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.unityCatalogProvisioningState">UnityCatalogProvisioningState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.databaseInstanceNameInput">DatabaseInstanceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.logicalDatabaseNameInput">LogicalDatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.specInput">SpecInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.databaseInstanceName">DatabaseInstanceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.logicalDatabaseName">LogicalDatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DataSynchronizationStatus`<sup>Required</sup> <a name="DataSynchronizationStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.dataSynchronizationStatus"></a>

```go
func DataSynchronizationStatus() DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference</a>

---

##### `EffectiveDatabaseInstanceName`<sup>Required</sup> <a name="EffectiveDatabaseInstanceName" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.effectiveDatabaseInstanceName"></a>

```go
func EffectiveDatabaseInstanceName() *string
```

- *Type:* *string

---

##### `EffectiveLogicalDatabaseName`<sup>Required</sup> <a name="EffectiveLogicalDatabaseName" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.effectiveLogicalDatabaseName"></a>

```go
func EffectiveLogicalDatabaseName() *string
```

- *Type:* *string

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.spec"></a>

```go
func Spec() DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference">DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference</a>

---

##### `UnityCatalogProvisioningState`<sup>Required</sup> <a name="UnityCatalogProvisioningState" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.unityCatalogProvisioningState"></a>

```go
func UnityCatalogProvisioningState() *string
```

- *Type:* *string

---

##### `DatabaseInstanceNameInput`<sup>Optional</sup> <a name="DatabaseInstanceNameInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.databaseInstanceNameInput"></a>

```go
func DatabaseInstanceNameInput() *string
```

- *Type:* *string

---

##### `LogicalDatabaseNameInput`<sup>Optional</sup> <a name="LogicalDatabaseNameInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.logicalDatabaseNameInput"></a>

```go
func LogicalDatabaseNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.specInput"></a>

```go
func SpecInput() interface{}
```

- *Type:* interface{}

---

##### `DatabaseInstanceName`<sup>Required</sup> <a name="DatabaseInstanceName" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.databaseInstanceName"></a>

```go
func DatabaseInstanceName() *string
```

- *Type:* *string

---

##### `LogicalDatabaseName`<sup>Required</sup> <a name="LogicalDatabaseName" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.logicalDatabaseName"></a>

```go
func LogicalDatabaseName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDatabaseSyncedDatabaseTableConfig <a name="DataDatabricksDatabaseSyncedDatabaseTableConfig" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetable"

&datadatabricksdatabasesynceddatabasetable.DataDatabricksDatabaseSyncedDatabaseTableConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	DatabaseInstanceName: *string,
	LogicalDatabaseName: *string,
	Spec: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/database_synced_database_table#name DataDatabricksDatabaseSyncedDatabaseTable#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.databaseInstanceName">DatabaseInstanceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/database_synced_database_table#database_instance_name DataDatabricksDatabaseSyncedDatabaseTable#database_instance_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.logicalDatabaseName">LogicalDatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/database_synced_database_table#logical_database_name DataDatabricksDatabaseSyncedDatabaseTable#logical_database_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec">DataDatabricksDatabaseSyncedDatabaseTableSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/database_synced_database_table#spec DataDatabricksDatabaseSyncedDatabaseTable#spec}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/database_synced_database_table#name DataDatabricksDatabaseSyncedDatabaseTable#name}.

---

##### `DatabaseInstanceName`<sup>Optional</sup> <a name="DatabaseInstanceName" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.databaseInstanceName"></a>

```go
DatabaseInstanceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/database_synced_database_table#database_instance_name DataDatabricksDatabaseSyncedDatabaseTable#database_instance_name}.

---

##### `LogicalDatabaseName`<sup>Optional</sup> <a name="LogicalDatabaseName" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.logicalDatabaseName"></a>

```go
LogicalDatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/database_synced_database_table#logical_database_name DataDatabricksDatabaseSyncedDatabaseTable#logical_database_name}.

---

##### `Spec`<sup>Optional</sup> <a name="Spec" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.spec"></a>

```go
Spec DataDatabricksDatabaseSyncedDatabaseTableSpec
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec">DataDatabricksDatabaseSyncedDatabaseTableSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/database_synced_database_table#spec DataDatabricksDatabaseSyncedDatabaseTable#spec}.

---

### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetable"

&datadatabricksdatabasesynceddatabasetable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus {
	ContinuousUpdateStatus: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus,
	FailedStatus: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus,
	ProvisioningStatus: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus,
	TriggeredUpdateStatus: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus.property.continuousUpdateStatus">ContinuousUpdateStatus</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/database_synced_database_table#continuous_update_status DataDatabricksDatabaseSyncedDatabaseTable#continuous_update_status}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus.property.failedStatus">FailedStatus</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/database_synced_database_table#failed_status DataDatabricksDatabaseSyncedDatabaseTable#failed_status}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus.property.provisioningStatus">ProvisioningStatus</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/database_synced_database_table#provisioning_status DataDatabricksDatabaseSyncedDatabaseTable#provisioning_status}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus.property.triggeredUpdateStatus">TriggeredUpdateStatus</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/database_synced_database_table#triggered_update_status DataDatabricksDatabaseSyncedDatabaseTable#triggered_update_status}. |

---

##### `ContinuousUpdateStatus`<sup>Optional</sup> <a name="ContinuousUpdateStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus.property.continuousUpdateStatus"></a>

```go
ContinuousUpdateStatus DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/database_synced_database_table#continuous_update_status DataDatabricksDatabaseSyncedDatabaseTable#continuous_update_status}.

---

##### `FailedStatus`<sup>Optional</sup> <a name="FailedStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus.property.failedStatus"></a>

```go
FailedStatus DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/database_synced_database_table#failed_status DataDatabricksDatabaseSyncedDatabaseTable#failed_status}.

---

##### `ProvisioningStatus`<sup>Optional</sup> <a name="ProvisioningStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus.property.provisioningStatus"></a>

```go
ProvisioningStatus DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/database_synced_database_table#provisioning_status DataDatabricksDatabaseSyncedDatabaseTable#provisioning_status}.

---

##### `TriggeredUpdateStatus`<sup>Optional</sup> <a name="TriggeredUpdateStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus.property.triggeredUpdateStatus"></a>

```go
TriggeredUpdateStatus DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/database_synced_database_table#triggered_update_status DataDatabricksDatabaseSyncedDatabaseTable#triggered_update_status}.

---

### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetable"

&datadatabricksdatabasesynceddatabasetable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus {

}
```


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetable"

&datadatabricksdatabasesynceddatabasetable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress {

}
```


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetable"

&datadatabricksdatabasesynceddatabasetable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus {

}
```


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetable"

&datadatabricksdatabasesynceddatabasetable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync {

}
```


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetable"

&datadatabricksdatabasesynceddatabasetable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo {

}
```


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetable"

&datadatabricksdatabasesynceddatabasetable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus {

}
```


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetable"

&datadatabricksdatabasesynceddatabasetable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress {

}
```


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetable"

&datadatabricksdatabasesynceddatabasetable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus {

}
```


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetable"

&datadatabricksdatabasesynceddatabasetable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress {

}
```


### DataDatabricksDatabaseSyncedDatabaseTableSpec <a name="DataDatabricksDatabaseSyncedDatabaseTableSpec" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetable"

&datadatabricksdatabasesynceddatabasetable.DataDatabricksDatabaseSyncedDatabaseTableSpec {
	CreateDatabaseObjectsIfMissing: interface{},
	ExistingPipelineId: *string,
	NewPipelineSpec: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec,
	PrimaryKeyColumns: *[]*string,
	SchedulingPolicy: *string,
	SourceTableFullName: *string,
	TimeseriesKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec.property.createDatabaseObjectsIfMissing">CreateDatabaseObjectsIfMissing</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/database_synced_database_table#create_database_objects_if_missing DataDatabricksDatabaseSyncedDatabaseTable#create_database_objects_if_missing}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec.property.existingPipelineId">ExistingPipelineId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/database_synced_database_table#existing_pipeline_id DataDatabricksDatabaseSyncedDatabaseTable#existing_pipeline_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec.property.newPipelineSpec">NewPipelineSpec</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec">DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/database_synced_database_table#new_pipeline_spec DataDatabricksDatabaseSyncedDatabaseTable#new_pipeline_spec}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec.property.primaryKeyColumns">PrimaryKeyColumns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/database_synced_database_table#primary_key_columns DataDatabricksDatabaseSyncedDatabaseTable#primary_key_columns}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec.property.schedulingPolicy">SchedulingPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/database_synced_database_table#scheduling_policy DataDatabricksDatabaseSyncedDatabaseTable#scheduling_policy}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec.property.sourceTableFullName">SourceTableFullName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/database_synced_database_table#source_table_full_name DataDatabricksDatabaseSyncedDatabaseTable#source_table_full_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec.property.timeseriesKey">TimeseriesKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/database_synced_database_table#timeseries_key DataDatabricksDatabaseSyncedDatabaseTable#timeseries_key}. |

---

##### `CreateDatabaseObjectsIfMissing`<sup>Optional</sup> <a name="CreateDatabaseObjectsIfMissing" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec.property.createDatabaseObjectsIfMissing"></a>

```go
CreateDatabaseObjectsIfMissing interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/database_synced_database_table#create_database_objects_if_missing DataDatabricksDatabaseSyncedDatabaseTable#create_database_objects_if_missing}.

---

##### `ExistingPipelineId`<sup>Optional</sup> <a name="ExistingPipelineId" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec.property.existingPipelineId"></a>

```go
ExistingPipelineId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/database_synced_database_table#existing_pipeline_id DataDatabricksDatabaseSyncedDatabaseTable#existing_pipeline_id}.

---

##### `NewPipelineSpec`<sup>Optional</sup> <a name="NewPipelineSpec" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec.property.newPipelineSpec"></a>

```go
NewPipelineSpec DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec">DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/database_synced_database_table#new_pipeline_spec DataDatabricksDatabaseSyncedDatabaseTable#new_pipeline_spec}.

---

##### `PrimaryKeyColumns`<sup>Optional</sup> <a name="PrimaryKeyColumns" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec.property.primaryKeyColumns"></a>

```go
PrimaryKeyColumns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/database_synced_database_table#primary_key_columns DataDatabricksDatabaseSyncedDatabaseTable#primary_key_columns}.

---

##### `SchedulingPolicy`<sup>Optional</sup> <a name="SchedulingPolicy" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec.property.schedulingPolicy"></a>

```go
SchedulingPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/database_synced_database_table#scheduling_policy DataDatabricksDatabaseSyncedDatabaseTable#scheduling_policy}.

---

##### `SourceTableFullName`<sup>Optional</sup> <a name="SourceTableFullName" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec.property.sourceTableFullName"></a>

```go
SourceTableFullName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/database_synced_database_table#source_table_full_name DataDatabricksDatabaseSyncedDatabaseTable#source_table_full_name}.

---

##### `TimeseriesKey`<sup>Optional</sup> <a name="TimeseriesKey" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec.property.timeseriesKey"></a>

```go
TimeseriesKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/database_synced_database_table#timeseries_key DataDatabricksDatabaseSyncedDatabaseTable#timeseries_key}.

---

### DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec <a name="DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetable"

&datadatabricksdatabasesynceddatabasetable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec {
	StorageCatalog: *string,
	StorageSchema: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec.property.storageCatalog">StorageCatalog</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/database_synced_database_table#storage_catalog DataDatabricksDatabaseSyncedDatabaseTable#storage_catalog}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec.property.storageSchema">StorageSchema</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/database_synced_database_table#storage_schema DataDatabricksDatabaseSyncedDatabaseTable#storage_schema}. |

---

##### `StorageCatalog`<sup>Optional</sup> <a name="StorageCatalog" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec.property.storageCatalog"></a>

```go
StorageCatalog *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/database_synced_database_table#storage_catalog DataDatabricksDatabaseSyncedDatabaseTable#storage_catalog}.

---

##### `StorageSchema`<sup>Optional</sup> <a name="StorageSchema" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec.property.storageSchema"></a>

```go
StorageSchema *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/database_synced_database_table#storage_schema DataDatabricksDatabaseSyncedDatabaseTable#storage_schema}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetable"

datadatabricksdatabasesynceddatabasetable.NewDataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds">EstimatedCompletionTimeSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing">LatestVersionCurrentlyProcessing</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.provisioningPhase">ProvisioningPhase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount">SyncedRowCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion">SyncProgressCompletion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount">TotalRowCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EstimatedCompletionTimeSeconds`<sup>Required</sup> <a name="EstimatedCompletionTimeSeconds" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds"></a>

```go
func EstimatedCompletionTimeSeconds() *f64
```

- *Type:* *f64

---

##### `LatestVersionCurrentlyProcessing`<sup>Required</sup> <a name="LatestVersionCurrentlyProcessing" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing"></a>

```go
func LatestVersionCurrentlyProcessing() *f64
```

- *Type:* *f64

---

##### `ProvisioningPhase`<sup>Required</sup> <a name="ProvisioningPhase" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.provisioningPhase"></a>

```go
func ProvisioningPhase() *string
```

- *Type:* *string

---

##### `SyncedRowCount`<sup>Required</sup> <a name="SyncedRowCount" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount"></a>

```go
func SyncedRowCount() *f64
```

- *Type:* *f64

---

##### `SyncProgressCompletion`<sup>Required</sup> <a name="SyncProgressCompletion" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion"></a>

```go
func SyncProgressCompletion() *f64
```

- *Type:* *f64

---

##### `TotalRowCount`<sup>Required</sup> <a name="TotalRowCount" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount"></a>

```go
func TotalRowCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress</a>

---


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetable"

datadatabricksdatabasesynceddatabasetable.NewDataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.initialPipelineSyncProgress">InitialPipelineSyncProgress</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.lastProcessedCommitVersion">LastProcessedCommitVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.timestamp">Timestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InitialPipelineSyncProgress`<sup>Required</sup> <a name="InitialPipelineSyncProgress" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.initialPipelineSyncProgress"></a>

```go
func InitialPipelineSyncProgress() DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference</a>

---

##### `LastProcessedCommitVersion`<sup>Required</sup> <a name="LastProcessedCommitVersion" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.lastProcessedCommitVersion"></a>

```go
func LastProcessedCommitVersion() *f64
```

- *Type:* *f64

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.timestamp"></a>

```go
func Timestamp() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetable"

datadatabricksdatabasesynceddatabasetable.NewDataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.lastProcessedCommitVersion">LastProcessedCommitVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.timestamp">Timestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastProcessedCommitVersion`<sup>Required</sup> <a name="LastProcessedCommitVersion" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.lastProcessedCommitVersion"></a>

```go
func LastProcessedCommitVersion() *f64
```

- *Type:* *f64

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.timestamp"></a>

```go
func Timestamp() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetable"

datadatabricksdatabasesynceddatabasetable.NewDataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitTimestamp">DeltaCommitTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitVersion">DeltaCommitVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeltaCommitTimestamp`<sup>Required</sup> <a name="DeltaCommitTimestamp" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitTimestamp"></a>

```go
func DeltaCommitTimestamp() *string
```

- *Type:* *string

---

##### `DeltaCommitVersion`<sup>Required</sup> <a name="DeltaCommitVersion" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitVersion"></a>

```go
func DeltaCommitVersion() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo</a>

---


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetable"

datadatabricksdatabasesynceddatabasetable.NewDataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.deltaTableSyncInfo">DeltaTableSyncInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.syncEndTimestamp">SyncEndTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.syncStartTimestamp">SyncStartTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeltaTableSyncInfo`<sup>Required</sup> <a name="DeltaTableSyncInfo" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.deltaTableSyncInfo"></a>

```go
func DeltaTableSyncInfo() DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference</a>

---

##### `SyncEndTimestamp`<sup>Required</sup> <a name="SyncEndTimestamp" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.syncEndTimestamp"></a>

```go
func SyncEndTimestamp() *string
```

- *Type:* *string

---

##### `SyncStartTimestamp`<sup>Required</sup> <a name="SyncStartTimestamp" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.syncStartTimestamp"></a>

```go
func SyncStartTimestamp() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync</a>

---


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetable"

datadatabricksdatabasesynceddatabasetable.NewDataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putContinuousUpdateStatus">PutContinuousUpdateStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putFailedStatus">PutFailedStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putProvisioningStatus">PutProvisioningStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putTriggeredUpdateStatus">PutTriggeredUpdateStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetContinuousUpdateStatus">ResetContinuousUpdateStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetFailedStatus">ResetFailedStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetProvisioningStatus">ResetProvisioningStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetTriggeredUpdateStatus">ResetTriggeredUpdateStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContinuousUpdateStatus` <a name="PutContinuousUpdateStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putContinuousUpdateStatus"></a>

```go
func PutContinuousUpdateStatus(value DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putContinuousUpdateStatus.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus</a>

---

##### `PutFailedStatus` <a name="PutFailedStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putFailedStatus"></a>

```go
func PutFailedStatus(value DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putFailedStatus.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus</a>

---

##### `PutProvisioningStatus` <a name="PutProvisioningStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putProvisioningStatus"></a>

```go
func PutProvisioningStatus(value DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putProvisioningStatus.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus</a>

---

##### `PutTriggeredUpdateStatus` <a name="PutTriggeredUpdateStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putTriggeredUpdateStatus"></a>

```go
func PutTriggeredUpdateStatus(value DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putTriggeredUpdateStatus.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus</a>

---

##### `ResetContinuousUpdateStatus` <a name="ResetContinuousUpdateStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetContinuousUpdateStatus"></a>

```go
func ResetContinuousUpdateStatus()
```

##### `ResetFailedStatus` <a name="ResetFailedStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetFailedStatus"></a>

```go
func ResetFailedStatus()
```

##### `ResetProvisioningStatus` <a name="ResetProvisioningStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetProvisioningStatus"></a>

```go
func ResetProvisioningStatus()
```

##### `ResetTriggeredUpdateStatus` <a name="ResetTriggeredUpdateStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetTriggeredUpdateStatus"></a>

```go
func ResetTriggeredUpdateStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.continuousUpdateStatus">ContinuousUpdateStatus</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.detailedState">DetailedState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.failedStatus">FailedStatus</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.lastSync">LastSync</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.pipelineId">PipelineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.provisioningStatus">ProvisioningStatus</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.triggeredUpdateStatus">TriggeredUpdateStatus</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.continuousUpdateStatusInput">ContinuousUpdateStatusInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.failedStatusInput">FailedStatusInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.provisioningStatusInput">ProvisioningStatusInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.triggeredUpdateStatusInput">TriggeredUpdateStatusInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContinuousUpdateStatus`<sup>Required</sup> <a name="ContinuousUpdateStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.continuousUpdateStatus"></a>

```go
func ContinuousUpdateStatus() DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference</a>

---

##### `DetailedState`<sup>Required</sup> <a name="DetailedState" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.detailedState"></a>

```go
func DetailedState() *string
```

- *Type:* *string

---

##### `FailedStatus`<sup>Required</sup> <a name="FailedStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.failedStatus"></a>

```go
func FailedStatus() DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference</a>

---

##### `LastSync`<sup>Required</sup> <a name="LastSync" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.lastSync"></a>

```go
func LastSync() DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference</a>

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.pipelineId"></a>

```go
func PipelineId() *string
```

- *Type:* *string

---

##### `ProvisioningStatus`<sup>Required</sup> <a name="ProvisioningStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.provisioningStatus"></a>

```go
func ProvisioningStatus() DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference</a>

---

##### `TriggeredUpdateStatus`<sup>Required</sup> <a name="TriggeredUpdateStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.triggeredUpdateStatus"></a>

```go
func TriggeredUpdateStatus() DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference</a>

---

##### `ContinuousUpdateStatusInput`<sup>Optional</sup> <a name="ContinuousUpdateStatusInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.continuousUpdateStatusInput"></a>

```go
func ContinuousUpdateStatusInput() interface{}
```

- *Type:* interface{}

---

##### `FailedStatusInput`<sup>Optional</sup> <a name="FailedStatusInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.failedStatusInput"></a>

```go
func FailedStatusInput() interface{}
```

- *Type:* interface{}

---

##### `ProvisioningStatusInput`<sup>Optional</sup> <a name="ProvisioningStatusInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.provisioningStatusInput"></a>

```go
func ProvisioningStatusInput() interface{}
```

- *Type:* interface{}

---

##### `TriggeredUpdateStatusInput`<sup>Optional</sup> <a name="TriggeredUpdateStatusInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.triggeredUpdateStatusInput"></a>

```go
func TriggeredUpdateStatusInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus</a>

---


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetable"

datadatabricksdatabasesynceddatabasetable.NewDataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds">EstimatedCompletionTimeSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing">LatestVersionCurrentlyProcessing</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.provisioningPhase">ProvisioningPhase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount">SyncedRowCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion">SyncProgressCompletion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount">TotalRowCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EstimatedCompletionTimeSeconds`<sup>Required</sup> <a name="EstimatedCompletionTimeSeconds" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds"></a>

```go
func EstimatedCompletionTimeSeconds() *f64
```

- *Type:* *f64

---

##### `LatestVersionCurrentlyProcessing`<sup>Required</sup> <a name="LatestVersionCurrentlyProcessing" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing"></a>

```go
func LatestVersionCurrentlyProcessing() *f64
```

- *Type:* *f64

---

##### `ProvisioningPhase`<sup>Required</sup> <a name="ProvisioningPhase" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.provisioningPhase"></a>

```go
func ProvisioningPhase() *string
```

- *Type:* *string

---

##### `SyncedRowCount`<sup>Required</sup> <a name="SyncedRowCount" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount"></a>

```go
func SyncedRowCount() *f64
```

- *Type:* *f64

---

##### `SyncProgressCompletion`<sup>Required</sup> <a name="SyncProgressCompletion" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion"></a>

```go
func SyncProgressCompletion() *f64
```

- *Type:* *f64

---

##### `TotalRowCount`<sup>Required</sup> <a name="TotalRowCount" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount"></a>

```go
func TotalRowCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress</a>

---


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetable"

datadatabricksdatabasesynceddatabasetable.NewDataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.initialPipelineSyncProgress">InitialPipelineSyncProgress</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InitialPipelineSyncProgress`<sup>Required</sup> <a name="InitialPipelineSyncProgress" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.initialPipelineSyncProgress"></a>

```go
func InitialPipelineSyncProgress() DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetable"

datadatabricksdatabasesynceddatabasetable.NewDataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.lastProcessedCommitVersion">LastProcessedCommitVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.timestamp">Timestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.triggeredUpdateProgress">TriggeredUpdateProgress</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastProcessedCommitVersion`<sup>Required</sup> <a name="LastProcessedCommitVersion" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.lastProcessedCommitVersion"></a>

```go
func LastProcessedCommitVersion() *f64
```

- *Type:* *f64

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.timestamp"></a>

```go
func Timestamp() *string
```

- *Type:* *string

---

##### `TriggeredUpdateProgress`<sup>Required</sup> <a name="TriggeredUpdateProgress" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.triggeredUpdateProgress"></a>

```go
func TriggeredUpdateProgress() DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetable"

datadatabricksdatabasesynceddatabasetable.NewDataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.estimatedCompletionTimeSeconds">EstimatedCompletionTimeSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.latestVersionCurrentlyProcessing">LatestVersionCurrentlyProcessing</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.provisioningPhase">ProvisioningPhase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncedRowCount">SyncedRowCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncProgressCompletion">SyncProgressCompletion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.totalRowCount">TotalRowCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EstimatedCompletionTimeSeconds`<sup>Required</sup> <a name="EstimatedCompletionTimeSeconds" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.estimatedCompletionTimeSeconds"></a>

```go
func EstimatedCompletionTimeSeconds() *f64
```

- *Type:* *f64

---

##### `LatestVersionCurrentlyProcessing`<sup>Required</sup> <a name="LatestVersionCurrentlyProcessing" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.latestVersionCurrentlyProcessing"></a>

```go
func LatestVersionCurrentlyProcessing() *f64
```

- *Type:* *f64

---

##### `ProvisioningPhase`<sup>Required</sup> <a name="ProvisioningPhase" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.provisioningPhase"></a>

```go
func ProvisioningPhase() *string
```

- *Type:* *string

---

##### `SyncedRowCount`<sup>Required</sup> <a name="SyncedRowCount" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncedRowCount"></a>

```go
func SyncedRowCount() *f64
```

- *Type:* *f64

---

##### `SyncProgressCompletion`<sup>Required</sup> <a name="SyncProgressCompletion" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncProgressCompletion"></a>

```go
func SyncProgressCompletion() *f64
```

- *Type:* *f64

---

##### `TotalRowCount`<sup>Required</sup> <a name="TotalRowCount" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.totalRowCount"></a>

```go
func TotalRowCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress</a>

---


### DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetable"

datadatabricksdatabasesynceddatabasetable.NewDataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.resetStorageCatalog">ResetStorageCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.resetStorageSchema">ResetStorageSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStorageCatalog` <a name="ResetStorageCatalog" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.resetStorageCatalog"></a>

```go
func ResetStorageCatalog()
```

##### `ResetStorageSchema` <a name="ResetStorageSchema" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.resetStorageSchema"></a>

```go
func ResetStorageSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageCatalogInput">StorageCatalogInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageSchemaInput">StorageSchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageCatalog">StorageCatalog</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageSchema">StorageSchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StorageCatalogInput`<sup>Optional</sup> <a name="StorageCatalogInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageCatalogInput"></a>

```go
func StorageCatalogInput() *string
```

- *Type:* *string

---

##### `StorageSchemaInput`<sup>Optional</sup> <a name="StorageSchemaInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageSchemaInput"></a>

```go
func StorageSchemaInput() *string
```

- *Type:* *string

---

##### `StorageCatalog`<sup>Required</sup> <a name="StorageCatalog" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageCatalog"></a>

```go
func StorageCatalog() *string
```

- *Type:* *string

---

##### `StorageSchema`<sup>Required</sup> <a name="StorageSchema" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageSchema"></a>

```go
func StorageSchema() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksdatabasesynceddatabasetable"

datadatabricksdatabasesynceddatabasetable.NewDataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.putNewPipelineSpec">PutNewPipelineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resetCreateDatabaseObjectsIfMissing">ResetCreateDatabaseObjectsIfMissing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resetExistingPipelineId">ResetExistingPipelineId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resetNewPipelineSpec">ResetNewPipelineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resetPrimaryKeyColumns">ResetPrimaryKeyColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resetSchedulingPolicy">ResetSchedulingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resetSourceTableFullName">ResetSourceTableFullName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resetTimeseriesKey">ResetTimeseriesKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNewPipelineSpec` <a name="PutNewPipelineSpec" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.putNewPipelineSpec"></a>

```go
func PutNewPipelineSpec(value DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.putNewPipelineSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec">DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec</a>

---

##### `ResetCreateDatabaseObjectsIfMissing` <a name="ResetCreateDatabaseObjectsIfMissing" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resetCreateDatabaseObjectsIfMissing"></a>

```go
func ResetCreateDatabaseObjectsIfMissing()
```

##### `ResetExistingPipelineId` <a name="ResetExistingPipelineId" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resetExistingPipelineId"></a>

```go
func ResetExistingPipelineId()
```

##### `ResetNewPipelineSpec` <a name="ResetNewPipelineSpec" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resetNewPipelineSpec"></a>

```go
func ResetNewPipelineSpec()
```

##### `ResetPrimaryKeyColumns` <a name="ResetPrimaryKeyColumns" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resetPrimaryKeyColumns"></a>

```go
func ResetPrimaryKeyColumns()
```

##### `ResetSchedulingPolicy` <a name="ResetSchedulingPolicy" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resetSchedulingPolicy"></a>

```go
func ResetSchedulingPolicy()
```

##### `ResetSourceTableFullName` <a name="ResetSourceTableFullName" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resetSourceTableFullName"></a>

```go
func ResetSourceTableFullName()
```

##### `ResetTimeseriesKey` <a name="ResetTimeseriesKey" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resetTimeseriesKey"></a>

```go
func ResetTimeseriesKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.newPipelineSpec">NewPipelineSpec</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference">DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.createDatabaseObjectsIfMissingInput">CreateDatabaseObjectsIfMissingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.existingPipelineIdInput">ExistingPipelineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.newPipelineSpecInput">NewPipelineSpecInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.primaryKeyColumnsInput">PrimaryKeyColumnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.schedulingPolicyInput">SchedulingPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.sourceTableFullNameInput">SourceTableFullNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.timeseriesKeyInput">TimeseriesKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.createDatabaseObjectsIfMissing">CreateDatabaseObjectsIfMissing</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.existingPipelineId">ExistingPipelineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.primaryKeyColumns">PrimaryKeyColumns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.schedulingPolicy">SchedulingPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.sourceTableFullName">SourceTableFullName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.timeseriesKey">TimeseriesKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NewPipelineSpec`<sup>Required</sup> <a name="NewPipelineSpec" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.newPipelineSpec"></a>

```go
func NewPipelineSpec() DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference">DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference</a>

---

##### `CreateDatabaseObjectsIfMissingInput`<sup>Optional</sup> <a name="CreateDatabaseObjectsIfMissingInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.createDatabaseObjectsIfMissingInput"></a>

```go
func CreateDatabaseObjectsIfMissingInput() interface{}
```

- *Type:* interface{}

---

##### `ExistingPipelineIdInput`<sup>Optional</sup> <a name="ExistingPipelineIdInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.existingPipelineIdInput"></a>

```go
func ExistingPipelineIdInput() *string
```

- *Type:* *string

---

##### `NewPipelineSpecInput`<sup>Optional</sup> <a name="NewPipelineSpecInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.newPipelineSpecInput"></a>

```go
func NewPipelineSpecInput() interface{}
```

- *Type:* interface{}

---

##### `PrimaryKeyColumnsInput`<sup>Optional</sup> <a name="PrimaryKeyColumnsInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.primaryKeyColumnsInput"></a>

```go
func PrimaryKeyColumnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SchedulingPolicyInput`<sup>Optional</sup> <a name="SchedulingPolicyInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.schedulingPolicyInput"></a>

```go
func SchedulingPolicyInput() *string
```

- *Type:* *string

---

##### `SourceTableFullNameInput`<sup>Optional</sup> <a name="SourceTableFullNameInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.sourceTableFullNameInput"></a>

```go
func SourceTableFullNameInput() *string
```

- *Type:* *string

---

##### `TimeseriesKeyInput`<sup>Optional</sup> <a name="TimeseriesKeyInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.timeseriesKeyInput"></a>

```go
func TimeseriesKeyInput() *string
```

- *Type:* *string

---

##### `CreateDatabaseObjectsIfMissing`<sup>Required</sup> <a name="CreateDatabaseObjectsIfMissing" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.createDatabaseObjectsIfMissing"></a>

```go
func CreateDatabaseObjectsIfMissing() interface{}
```

- *Type:* interface{}

---

##### `ExistingPipelineId`<sup>Required</sup> <a name="ExistingPipelineId" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.existingPipelineId"></a>

```go
func ExistingPipelineId() *string
```

- *Type:* *string

---

##### `PrimaryKeyColumns`<sup>Required</sup> <a name="PrimaryKeyColumns" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.primaryKeyColumns"></a>

```go
func PrimaryKeyColumns() *[]*string
```

- *Type:* *[]*string

---

##### `SchedulingPolicy`<sup>Required</sup> <a name="SchedulingPolicy" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.schedulingPolicy"></a>

```go
func SchedulingPolicy() *string
```

- *Type:* *string

---

##### `SourceTableFullName`<sup>Required</sup> <a name="SourceTableFullName" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.sourceTableFullName"></a>

```go
func SourceTableFullName() *string
```

- *Type:* *string

---

##### `TimeseriesKey`<sup>Required</sup> <a name="TimeseriesKey" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.timeseriesKey"></a>

```go
func TimeseriesKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



